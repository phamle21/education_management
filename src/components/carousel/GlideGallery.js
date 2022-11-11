import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, Button } from 'react-bootstrap';
import GlideJs from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import { useWindowSize } from 'hooks/useWindowSize';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Error = () => (
  <Alert variant="info">
    The GlideGallery component must contain the <b>{'<GlideGallery.LargeItems>'}</b> and <b>{'<GlideGallery.ThumbItems>'}</b> children.
  </Alert>
);
const optionsLarge = {
  bound: true,
  rewind: false,
  focusAt: 0,
  perView: 1,
  startAt: 0,
};
const optionsThumb = (perView, glideLength) => ({
  bound: true,
  rewind: false,
  perView,
  perTouch: 1,
  focusAt: 0,
  startAt: 0,
  breakpoints: {
    3840: {
      perView: Math.min(perView, glideLength),
    },
    1600: {
      perView: Math.min(4, glideLength),
    },
    576: {
      perView: Math.min(3, glideLength),
    },
    420: {
      perView: Math.min(2, glideLength),
    },
  },
});

const GlideGallery = ({ className = '', galleryThumbCount = 5, thumbWidth = 70, children }) => {
  const { placementStatus, behaviourStatus, attrMobile } = useSelector((state) => state.menu);
  const largeRef = React.useRef();
  const thumbRef = React.useRef();
  const glideLarge = React.useRef();
  const glideThumb = React.useRef();
  const linkAllowClick = React.useRef(true);
  const linkSwipeEnd = React.useRef(true);

  const { width } = useWindowSize();

  const update = () => {
    glideLarge.current.update();
    glideThumb.current.update();
  };

  const largeCarousel = children.find((x) => x.type.displayName === 'LargeItems');
  const thumbCarousel = children.find((x) => x.type.displayName === 'ThumbItems');

  useEffect(() => {
    if (largeCarousel && thumbCarousel && width && largeRef.current && thumbRef.current && glideLarge.current && glideThumb.current) {
      update();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (largeCarousel && thumbCarousel && width && largeRef.current && thumbRef.current && glideLarge.current && glideThumb.current) {
      setTimeout(() => {
        update();
      }, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, placementStatus, behaviourStatus, attrMobile]);

  const glideLength = largeCarousel ? largeCarousel.props.children.length : 0;
  const perView = glideLength !== 0 ? Math.min(galleryThumbCount, glideLength) : 0;

  const init = () => {
    glideLarge.current = new GlideJs(largeRef.current, largeCarousel.props.options || optionsLarge);
    glideThumb.current = new GlideJs(thumbRef.current, thumbCarousel.props.options || optionsThumb(perView, glideLength));
    thumbRef.current.style.width = `${glideThumb.current.settings.perView * thumbWidth}px`;
  };
  const mount = () => {
    glideLarge.current.mount().update();
    glideThumb.current.mount().update();
  };
  const destroy = () => {
    glideLarge.current.destroy();
    glideThumb.current.destroy();
  };

  const addActiveThumbClass = (index) => {
    thumbRef.current.querySelectorAll('li').forEach((el, i) => {
      el.classList.remove('active');
      if (i === index) {
        el.classList.add('active');
      }
    });
    const gap = glideThumb.current.index + perView;
    if (index >= gap) {
      glideThumb.current.go('>');
    }
    if (index < glideThumb.current.index) {
      glideThumb.current.go('<');
    }
  };
  const getIndex = (elem) => {
    let i = 0;
    let el = elem;
    while (el.previousElementSibling !== null) {
      el = el.previousElementSibling;
      i += 1;
    }
    return i;
  };
  const onThumbClick = (event) => {
    const clickedIndex = getIndex(event.currentTarget);
    glideLarge.current.go(`=${clickedIndex}`);
    addActiveThumbClass(clickedIndex);
  };
  const onGlideLargeSwipeEnd = () => {
    addActiveThumbClass(glideLarge.current.index);
    linkSwipeEnd.current = true;
  };
  const onGlideLargeSwipeMove = () => {
    linkSwipeEnd.current = false;
    linkAllowClick.current = false;
  };
  const onGlideLargeMoveAfter = () => {
    if (linkSwipeEnd.current) {
      linkAllowClick.current = true;
    }
  };
  const onGlideThumbResize = () => {
    const { perView: perViewInline } = glideThumb.current.settings;
    thumbRef.current.style.width = `${perViewInline * thumbWidth}px`;
    if (perViewInline >= thumbRef.current.querySelectorAll('li').length) {
      thumbRef.current.querySelector('.glide__arrows').style.display = 'none';
    } else {
      thumbRef.current.querySelector('.glide__arrows').style.display = 'block';
    }
  };
  const onLargeElementAnchorClick = (event) => {
    if (linkAllowClick.current) {
      return true;
    }
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    return true;
  };

  const addListeners = () => {
    thumbRef.current.querySelectorAll('li').forEach((el) => {
      el.addEventListener('click', onThumbClick);
    });
    glideLarge.current.on(['swipe.end'], onGlideLargeSwipeEnd);
    glideLarge.current.on(['swipe.move'], onGlideLargeSwipeMove);
    glideLarge.current.on(['move.after'], onGlideLargeMoveAfter);
    glideThumb.current.on(['resize'], onGlideThumbResize);
    largeRef.current.querySelectorAll('a').forEach((el) => {
      el.addEventListener('click', onLargeElementAnchorClick);
    });
  };

  useEffect(() => {
    if (largeCarousel && thumbCarousel) {
      init();
      addActiveThumbClass(0);
      addListeners();
      mount();
      onGlideThumbResize();
    }

    return () => {
      if (largeCarousel && thumbCarousel) {
        destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!largeCarousel || !thumbCarousel || !Array.isArray(children)) return <Error />;

  return (
    <div className={`glide glide-gallery ${className}`}>
      <LargeItems ref={largeRef} {...largeCarousel.props} />
      <ThumbItems ref={thumbRef} {...thumbCarousel.props} />
    </div>
  );
};

const LargeItems = React.forwardRef(({ className = '', children }, ref) => (
  <div ref={ref} className={`glide glide-large ${className}`}>
    <div className="glide__track" data-glide-el="track">
      <ul className="glide__slides mb-0">{children}</ul>
    </div>
  </div>
));
LargeItems.displayName = 'LargeItems';

const ThumbItems = React.forwardRef(({ className = '', arrowVariant = 'foreground', arrowClassName = '', children }, ref) => (
  <div ref={ref} className={`glide glide-thumb ${className}`}>
    <div className="glide__track" data-glide-el="track">
      <ul className="glide__slides mb-0">{children}</ul>
    </div>
    <div className="glide__arrows" data-glide-el="controls">
      <Button variant={arrowVariant} className={`btn-icon btn-icon-only hover-outline left-arrow ${arrowClassName}`} data-glide-dir="<">
        <CsLineIcons icon="chevron-left" />
      </Button>
      <Button variant={arrowVariant} className={`btn-icon btn-icon-only hover-outline right-arrow ${arrowClassName}`} data-glide-dir=">">
        <CsLineIcons icon="chevron-right" />
      </Button>
    </div>
  </div>
));
ThumbItems.displayName = 'ThumbItems';

const Item = ({ className = 'p-0', children }) => <li className={`glide__slide ${className}`}>{children}</li>;
Item.displayName = 'Item';

GlideGallery.LargeItems = LargeItems;
GlideGallery.ThumbItems = ThumbItems;
GlideGallery.Item = Item;

export default GlideGallery;

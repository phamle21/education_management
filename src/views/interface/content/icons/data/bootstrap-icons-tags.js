const bootstrapIcons = [
  {
    c: 'bi-alarm',
    t: ['alarm', 'clock', 'devices'],
  },
  {
    c: 'bi-alarm-fill',
    t: ['alarm', 'fill', 'clock', 'devices'],
  },
  {
    c: 'bi-align-bottom',
    t: ['align', 'bottom', 'space', 'distribute', 'graphics'],
  },
  {
    c: 'bi-align-center',
    t: ['align', 'center', 'space', 'distribute', 'graphics'],
  },
  {
    c: 'bi-align-end',
    t: ['align', 'end', 'space', 'distribute', 'graphics'],
  },
  {
    c: 'bi-align-middle',
    t: ['align', 'middle', 'space', 'distribute', 'graphics'],
  },
  {
    c: 'bi-align-start',
    t: ['align', 'start', 'space', 'distribute', 'graphics'],
  },
  {
    c: 'bi-align-top',
    t: ['align', 'top', 'space', 'distribute', 'graphics'],
  },
  {
    c: 'bi-alt',
    t: ['alt', 'key', 'option', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-app',
    t: ['app', 'application', 'ios', 'android', 'square', 'apps'],
  },
  {
    c: 'bi-app-indicator',
    t: ['app', 'indicator', 'application', 'ios', 'android', 'notification', 'square', 'apps'],
  },
  {
    c: 'bi-archive',
    t: ['archive', 'box', 'delete', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-archive-fill',
    t: ['archive', 'fill', 'box', 'delete', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-arrow-90deg-down',
    t: ['arrow', '90deg', 'down', 'right-angle', 'arrows'],
  },
  {
    c: 'bi-arrow-90deg-left',
    t: ['arrow', '90deg', 'left', 'right-angle', 'arrows'],
  },
  {
    c: 'bi-arrow-90deg-right',
    t: ['arrow', '90deg', 'right', 'right-angle', 'arrows'],
  },
  {
    c: 'bi-arrow-90deg-up',
    t: ['arrow', '90deg', 'up', 'right-angle', 'arrows'],
  },
  {
    c: 'bi-arrow-bar-down',
    t: ['arrow', 'bar', 'down', 'arrows'],
  },
  {
    c: 'bi-arrow-bar-left',
    t: ['arrow', 'bar', 'left', 'arrows'],
  },
  {
    c: 'bi-arrow-bar-right',
    t: ['arrow', 'bar', 'right', 'arrows'],
  },
  {
    c: 'bi-arrow-bar-up',
    t: ['arrow', 'bar', 'up', 'arrows'],
  },
  {
    c: 'bi-arrow-clockwise',
    t: ['arrow', 'clockwise', 'right', 'spin', 'turn', 'around', 'round', 'rotate', 'arrows'],
  },
  {
    c: 'bi-arrow-counterclockwise',
    t: ['arrow', 'counterclockwise', 'left', 'spin', 'turn', 'around', 'round', 'rotate', 'arrows'],
  },
  {
    c: 'bi-arrow-down',
    t: ['arrow', 'down', 'arrows'],
  },
  {
    c: 'bi-arrow-down-circle',
    t: ['arrow', 'down', 'circle', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-circle-fill',
    t: ['arrow', 'down', 'circle', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-left-circle',
    t: ['arrow', 'down', 'left', 'circle', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-left-circle-fill',
    t: ['arrow', 'down', 'left', 'circle', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-left-square',
    t: ['arrow', 'down', 'left', 'square', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-left-square-fill',
    t: ['arrow', 'down', 'left', 'square', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-right-circle',
    t: ['arrow', 'down', 'right', 'circle', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-right-circle-fill',
    t: ['arrow', 'down', 'right', 'circle', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-right-square',
    t: ['arrow', 'down', 'right', 'square', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-right-square-fill',
    t: ['arrow', 'down', 'right', 'square', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-square',
    t: ['arrow', 'down', 'square', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-square-fill',
    t: ['arrow', 'down', 'square', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-down-left',
    t: ['arrow', 'down', 'left', 'arrows'],
  },
  {
    c: 'bi-arrow-down-right',
    t: ['arrow', 'down', 'right', 'arrows'],
  },
  {
    c: 'bi-arrow-down-short',
    t: ['arrow', 'down', 'short', 'arrows'],
  },
  {
    c: 'bi-arrow-down-up',
    t: ['arrow', 'down', 'up', 'arrows'],
  },
  {
    c: 'bi-arrow-left',
    t: ['arrow', 'left', 'arrows'],
  },
  {
    c: 'bi-arrow-left-circle',
    t: ['arrow', 'left', 'circle', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-left-circle-fill',
    t: ['arrow', 'left', 'circle', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-left-square',
    t: ['arrow', 'left', 'square', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-left-square-fill',
    t: ['arrow', 'left', 'square', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-left-right',
    t: ['arrow', 'left', 'right', 'arrows'],
  },
  {
    c: 'bi-arrow-left-short',
    t: ['arrow', 'left', 'short', 'arrows'],
  },
  {
    c: 'bi-arrow-repeat',
    t: ['arrow', 'repeat', 'spin', 'turn', 'around', 'round', 'rotate', 'arrows'],
  },
  {
    c: 'bi-arrow-return-left',
    t: ['arrow', 'return', 'left', 'arrows'],
  },
  {
    c: 'bi-arrow-return-right',
    t: ['arrow', 'return', 'right', 'arrows'],
  },
  {
    c: 'bi-arrow-right',
    t: ['arrow', 'right', 'arrows'],
  },
  {
    c: 'bi-arrow-right-circle',
    t: ['arrow', 'right', 'circle', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-right-circle-fill',
    t: ['arrow', 'right', 'circle', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-right-square',
    t: ['arrow', 'right', 'square', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-right-square-fill',
    t: ['arrow', 'right', 'square', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-right-short',
    t: ['arrow', 'right', 'short', 'arrows'],
  },
  {
    c: 'bi-arrow-up',
    t: ['arrow', 'up', 'arrows'],
  },
  {
    c: 'bi-arrow-up-circle',
    t: ['arrow', 'up', 'circle', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-circle-fill',
    t: ['arrow', 'up', 'circle', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-left-circle',
    t: ['arrow', 'up', 'left', 'circle', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-left-circle-fill',
    t: ['arrow', 'up', 'left', 'circle', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-left-square',
    t: ['arrow', 'up', 'left', 'square', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-left-square-fill',
    t: ['arrow', 'up', 'left', 'square', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-right-circle',
    t: ['arrow', 'up', 'right', 'circle', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-right-circle-fill',
    t: ['arrow', 'up', 'right', 'circle', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-right-square',
    t: ['arrow', 'up', 'right', 'square', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-right-square-fill',
    t: ['arrow', 'up', 'right', 'square', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-square',
    t: ['arrow', 'up', 'square', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-square-fill',
    t: ['arrow', 'up', 'square', 'fill', 'shape', 'arrows'],
  },
  {
    c: 'bi-arrow-up-left',
    t: ['arrow', 'up', 'left', 'arrows'],
  },
  {
    c: 'bi-arrow-up-right',
    t: ['arrow', 'up', 'right', 'arrows'],
  },
  {
    c: 'bi-arrow-up-short',
    t: ['arrow', 'up', 'short', 'arrows'],
  },
  {
    c: 'bi-arrows-angle-contract',
    t: ['arrows', 'angle', 'contract', 'arrow'],
  },
  {
    c: 'bi-arrows-angle-expand',
    t: ['arrows', 'angle', 'expand', 'arrow'],
  },
  {
    c: 'bi-arrows-collapse',
    t: ['arrows', 'collapse', 'arrow'],
  },
  {
    c: 'bi-arrows-expand',
    t: ['arrows', 'expand', 'arrow'],
  },
  {
    c: 'bi-arrows-fullscreen',
    t: ['arrows', 'fullscreen', 'arrow'],
  },
  {
    c: 'bi-arrows-move',
    t: ['arrows', 'move', 'arrow', 'cursor'],
  },
  {
    c: 'bi-aspect-ratio',
    t: ['aspect', 'ratio', 'size', 'resize', 'crop', 'dimensions', 'media'],
  },
  {
    c: 'bi-aspect-ratio-fill',
    t: ['aspect', 'ratio', 'fill', 'size', 'resize', 'crop', 'dimensions', 'media'],
  },
  {
    c: 'bi-asterisk',
    t: ['asterisk', 'asterisks', 'star', 'typography'],
  },
  {
    c: 'bi-at',
    t: ['at', 'mention', 'sign', 'communications'],
  },
  {
    c: 'bi-award',
    t: ['award', 'prize', 'rosette', 'real', 'world'],
  },
  {
    c: 'bi-award-fill',
    t: ['award', 'fill', 'prize', 'rosette', 'real', 'world'],
  },
  {
    c: 'bi-back',
    t: ['back', 'backward', 'layer', 'graphics'],
  },
  {
    c: 'bi-backspace',
    t: ['backspace', 'key', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-backspace-fill',
    t: ['backspace', 'fill', 'key', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-backspace-reverse',
    t: ['backspace', 'reverse', 'key', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-backspace-reverse-fill',
    t: ['backspace', 'reverse', 'fill', 'key', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-badge-3d',
    t: ['badge', '3d', 'display', 'dimension', 'badges'],
  },
  {
    c: 'bi-badge-3d-fill',
    t: ['badge', '3d', 'fill', 'display', 'dimension', 'badges'],
  },
  {
    c: 'bi-badge-4k',
    t: ['badge', '4k', 'display', 'resolution', 'retina', 'badges'],
  },
  {
    c: 'bi-badge-4k-fill',
    t: ['badge', '4k', 'fill', 'display', 'resolution', 'retina', 'badges'],
  },
  {
    c: 'bi-badge-8k',
    t: ['badge', '8k', '4k', 'display', 'resolution', 'retina', 'badges'],
  },
  {
    c: 'bi-badge-8k-fill',
    t: ['badge', '8k', 'fill', '4k', 'display', 'resolution', 'retina', 'badges'],
  },
  {
    c: 'bi-badge-ad',
    t: ['badge', 'ad', 'advertisement', 'badges'],
  },
  {
    c: 'bi-badge-ad-fill',
    t: ['badge', 'ad', 'fill', 'advertisement', 'badges'],
  },
  {
    c: 'bi-badge-ar',
    t: ['badge', 'ar', 'augmented', 'reality', 'badges'],
  },
  {
    c: 'bi-badge-ar-fill',
    t: ['badge', 'ar', 'fill', 'augmented', 'reality', 'badges'],
  },
  {
    c: 'bi-badge-cc',
    t: ['badge', 'cc', 'closed', 'captioning', 'badges'],
  },
  {
    c: 'bi-badge-cc-fill',
    t: ['badge', 'cc', 'fill', 'closed', 'captioning', 'badges'],
  },
  {
    c: 'bi-badge-hd',
    t: ['badge', 'hd', 'display', 'resolution', 'high', 'definition', 'badges'],
  },
  {
    c: 'bi-badge-hd-fill',
    t: ['badge', 'hd', 'fill', 'display', 'resolution', 'high', 'definition', 'badges'],
  },
  {
    c: 'bi-badge-tm',
    t: ['badge', 'tm', 'trademark', 'badges'],
  },
  {
    c: 'bi-badge-tm-fill',
    t: ['badge', 'tm', 'fill', 'trademark', 'badges'],
  },
  {
    c: 'bi-badge-vo',
    t: ['badge', 'vo', 'voiceover', 'accessibility', 'badges'],
  },
  {
    c: 'bi-badge-vo-fill',
    t: ['badge', 'vo', 'fill', 'voiceover', 'accessibility', 'badges'],
  },
  {
    c: 'bi-badge-vr',
    t: ['badge', 'vr', 'virtual', 'reality', 'badges'],
  },
  {
    c: 'bi-badge-vr-fill',
    t: ['badge', 'vr', 'fill', 'virtual', 'reality', 'badges'],
  },
  {
    c: 'bi-badge-wc',
    t: ['badge', 'wc', 'wash', 'closet', 'badges'],
  },
  {
    c: 'bi-badge-wc-fill',
    t: ['badge', 'wc', 'fill', 'wash', 'closet', 'badges'],
  },
  {
    c: 'bi-bag',
    t: ['bag', 'shopping', 'cart', 'purchase', 'buy', 'commerce'],
  },
  {
    c: 'bi-bag-check',
    t: ['bag', 'check', 'shopping', 'checkout', 'cart', 'basket', 'commerce'],
  },
  {
    c: 'bi-bag-check-fill',
    t: ['bag', 'check', 'fill', 'shopping', 'checkout', 'cart', 'basket', 'commerce'],
  },
  {
    c: 'bi-bag-dash',
    t: ['bag', 'dash', 'shopping', 'checkout', 'check', 'cart', 'basket', 'commerce'],
  },
  {
    c: 'bi-bag-dash-fill',
    t: ['bag', 'dash', 'fill', 'shopping', 'checkout', 'check', 'cart', 'basket', 'commerce'],
  },
  {
    c: 'bi-bag-fill',
    t: ['bag', 'fill', 'shopping', 'cart', 'purchase', 'buy', 'commerce'],
  },
  {
    c: 'bi-bag-plus',
    t: ['bag', 'plus', 'shopping', 'checkout', 'check', 'cart', 'basket', 'commerce'],
  },
  {
    c: 'bi-bag-plus-fill',
    t: ['bag', 'plus', 'fill', 'shopping', 'add', 'cart', 'basket', 'commerce'],
  },
  {
    c: 'bi-bag-x',
    t: ['bag', 'x', 'shopping', 'checkout', 'check', 'cart', 'basket', 'commerce'],
  },
  {
    c: 'bi-bag-x-fill',
    t: ['bag', 'x', 'fill', 'shopping', 'checkout', 'check', 'cart', 'basket', 'commerce'],
  },
  {
    c: 'bi-bar-chart',
    t: ['bar', 'chart', 'graph', 'analytics', 'data'],
  },
  {
    c: 'bi-bar-chart-fill',
    t: ['bar', 'chart', 'fill', 'graph', 'analytics', 'data'],
  },
  {
    c: 'bi-bar-chart-line',
    t: ['bar', 'chart', 'line', 'graph', 'analytics', 'data'],
  },
  {
    c: 'bi-bar-chart-line-fill',
    t: ['bar', 'chart', 'line', 'fill', 'graph', 'analytics', 'data'],
  },
  {
    c: 'bi-bar-chart-steps',
    t: ['bar', 'chart', 'steps', 'graph', 'analytics', 'data'],
  },
  {
    c: 'bi-basket',
    t: ['basket', 'shopping', 'checkout', 'check', 'cart', 'bag', 'commerce'],
  },
  {
    c: 'bi-basket-fill',
    t: ['basket', 'fill', 'shopping', 'checkout', 'check', 'cart', 'bag', 'commerce'],
  },
  {
    c: 'bi-basket2',
    t: ['basket2', 'shopping', 'checkout', 'check', 'cart', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-basket2-fill',
    t: ['basket2', 'fill', 'shopping', 'checkout', 'check', 'cart', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-basket3',
    t: ['basket3', 'shopping', 'checkout', 'check', 'cart', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-basket3-fill',
    t: ['basket3', 'fill', 'shopping', 'checkout', 'check', 'cart', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-battery',
    t: ['battery', 'power', 'charge', 'devices'],
  },
  {
    c: 'bi-battery-charging',
    t: ['battery', 'charging', 'power', 'charge', 'devices'],
  },
  {
    c: 'bi-battery-full',
    t: ['battery', 'full', 'power', 'charge', 'devices'],
  },
  {
    c: 'bi-battery-half',
    t: ['battery', 'half', 'power', 'charge', 'devices'],
  },
  {
    c: 'bi-bell',
    t: ['bell', 'notification', 'communications'],
  },
  {
    c: 'bi-bell-fill',
    t: ['bell', 'fill', 'notification', 'communications'],
  },
  {
    c: 'bi-bezier',
    t: ['bezier', 'graphics', 'vector', 'pen'],
  },
  {
    c: 'bi-bezier2',
    t: ['bezier2', 'graphics', 'vector', 'pen'],
  },
  {
    c: 'bi-bicycle',
    t: ['bicycle', 'bike', 'riding', 'bicycling', 'real', 'world'],
  },
  {
    c: 'bi-binoculars',
    t: ['binoculars', 'distance', 'view', 'real', 'world'],
  },
  {
    c: 'bi-binoculars-fill',
    t: ['binoculars', 'fill', 'distance', 'view', 'real', 'world'],
  },
  {
    c: 'bi-blockquote-left',
    t: ['blockquote', 'left', 'text', 'type', 'typography'],
  },
  {
    c: 'bi-blockquote-right',
    t: ['blockquote', 'right', 'text', 'type', 'typography'],
  },
  {
    c: 'bi-book',
    t: ['book', 'novel', 'read', 'magazine', 'real', 'world'],
  },
  {
    c: 'bi-book-fill',
    t: ['book', 'fill', 'novel', 'read', 'magazine', 'real', 'world'],
  },
  {
    c: 'bi-book-half',
    t: ['book', 'half', 'novel', 'read', 'magazine', 'real', 'world'],
  },
  {
    c: 'bi-bookmark',
    t: ['bookmark', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-check',
    t: ['bookmark', 'check', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-check-fill',
    t: ['bookmark', 'check', 'fill', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-dash',
    t: ['bookmark', 'dash', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-dash-fill',
    t: ['bookmark', 'dash', 'fill', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-fill',
    t: ['bookmark', 'fill', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-heart',
    t: ['bookmark', 'heart', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-heart-fill',
    t: ['bookmark', 'heart', 'fill', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-plus',
    t: ['bookmark', 'plus', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-plus-fill',
    t: ['bookmark', 'plus', 'fill', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-star',
    t: ['bookmark', 'star', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-star-fill',
    t: ['bookmark', 'star', 'fill', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-x',
    t: ['bookmark', 'x', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmark-x-fill',
    t: ['bookmark', 'x', 'fill', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmarks',
    t: ['bookmarks', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookmarks-fill',
    t: ['bookmarks', 'fill', 'reading', 'book', 'label', 'tag', 'category', 'miscellaneous'],
  },
  {
    c: 'bi-bookshelf',
    t: ['bookshelf', 'shelf', 'real', 'world'],
  },
  {
    c: 'bi-bootstrap',
    t: ['bootstrap'],
  },
  {
    c: 'bi-bootstrap-fill',
    t: ['bootstrap', 'fill'],
  },
  {
    c: 'bi-bootstrap-reboot',
    t: ['bootstrap', 'reboot'],
  },
  {
    c: 'bi-border',
    t: ['border', 'borders', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-border-all',
    t: ['border', 'all', 'borders', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-border-bottom',
    t: ['border', 'bottom', 'borders', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-border-center',
    t: ['border', 'center', 'borders', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-border-inner',
    t: ['border', 'inner', 'borders', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-border-left',
    t: ['border', 'left', 'borders', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-border-middle',
    t: ['border', 'middle', 'borders', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-border-outer',
    t: ['border', 'outer', 'borders', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-border-right',
    t: ['border', 'right', 'borders', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-border-style',
    t: ['border', 'style', 'borders', 'wysiwyg', 'typography'],
  },
  {
    c: 'bi-border-top',
    t: ['border', 'top', 'borders', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-border-width',
    t: ['border', 'width', 'borders', 'wysiwyg', 'typography'],
  },
  {
    c: 'bi-bounding-box',
    t: ['bounding', 'box', 'text', 'shape', 'resize', 'dimensions', 'graphics'],
  },
  {
    c: 'bi-bounding-box-circles',
    t: ['bounding', 'box', 'circles', 'text', 'shape', 'resize', 'dimensions', 'graphics'],
  },
  {
    c: 'bi-box',
    t: ['box', 'cardboard', 'package', 'real', 'world'],
  },
  {
    c: 'bi-box-arrow-down-left',
    t: ['box', 'arrow', 'down', 'left', 'arrows'],
  },
  {
    c: 'bi-box-arrow-down-right',
    t: ['box', 'arrow', 'down', 'right', 'arrows'],
  },
  {
    c: 'bi-box-arrow-down',
    t: ['box', 'arrow', 'down', 'arrows'],
  },
  {
    c: 'bi-box-arrow-in-down',
    t: ['box', 'arrow', 'in', 'down', 'arrows'],
  },
  {
    c: 'bi-box-arrow-in-down-left',
    t: ['box', 'arrow', 'in', 'down', 'left', 'arrows'],
  },
  {
    c: 'bi-box-arrow-in-down-right',
    t: ['box', 'arrow', 'in', 'down', 'right', 'arrows'],
  },
  {
    c: 'bi-box-arrow-in-left',
    t: ['box', 'arrow', 'in', 'left', 'login', 'signin', 'enter', 'arrows'],
  },
  {
    c: 'bi-box-arrow-in-right',
    t: ['box', 'arrow', 'in', 'right', 'login', 'signin', 'enter', 'arrows'],
  },
  {
    c: 'bi-box-arrow-in-up',
    t: ['box', 'arrow', 'in', 'up', 'arrows'],
  },
  {
    c: 'bi-box-arrow-in-up-left',
    t: ['box', 'arrow', 'in', 'up', 'left', 'arrows'],
  },
  {
    c: 'bi-box-arrow-in-up-right',
    t: ['box', 'arrow', 'in', 'up', 'right', 'arrows'],
  },
  {
    c: 'bi-box-arrow-left',
    t: ['box', 'arrow', 'left', 'logout', 'signout', 'exit', 'arrows'],
  },
  {
    c: 'bi-box-arrow-right',
    t: ['box', 'arrow', 'right', 'logout', 'signout', 'exit', 'arrows'],
  },
  {
    c: 'bi-box-arrow-up',
    t: ['box', 'arrow', 'up', 'arrows'],
  },
  {
    c: 'bi-box-arrow-up-left',
    t: ['box', 'arrow', 'up', 'left', 'arrows'],
  },
  {
    c: 'bi-box-arrow-up-right',
    t: ['box', 'arrow', 'up', 'right', 'arrows'],
  },
  {
    c: 'bi-box-seam',
    t: ['box', 'seam', 'cardboard', 'package', 'real', 'world'],
  },
  {
    c: 'bi-braces',
    t: ['braces', 'text', 'type', 'typography'],
  },
  {
    c: 'bi-bricks',
    t: ['bricks', 'wall', 'real', 'world'],
  },
  {
    c: 'bi-briefcase',
    t: ['briefcase', 'business', 'real', 'world'],
  },
  {
    c: 'bi-briefcase-fill',
    t: ['briefcase', 'fill', 'business', 'real', 'world'],
  },
  {
    c: 'bi-brightness-alt-high',
    t: ['brightness', 'alt', 'high', 'sun', 'weather', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-brightness-alt-high-fill',
    t: ['brightness', 'alt', 'high', 'fill', 'sun', 'weather', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-brightness-alt-low',
    t: ['brightness', 'alt', 'low', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-brightness-alt-low-fill',
    t: ['brightness', 'alt', 'low', 'fill', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-brightness-high',
    t: ['brightness', 'high', 'sun', 'weather', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-brightness-high-fill',
    t: ['brightness', 'high', 'fill', 'sun', 'weather', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-brightness-low',
    t: ['brightness', 'low', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-brightness-low-fill',
    t: ['brightness', 'low', 'fill', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-broadcast',
    t: ['broadcast', 'radio', 'wave', 'amplify', 'wavelength', 'communications'],
  },
  {
    c: 'bi-broadcast-pin',
    t: ['broadcast', 'pin', 'radio', 'wave', 'amplify', 'wavelength', 'communications'],
  },
  {
    c: 'bi-brush',
    t: ['brush', 'paint', 'art', 'tools'],
  },
  {
    c: 'bi-brush-fill',
    t: ['brush', 'fill', 'paint', 'art', 'tools'],
  },
  {
    c: 'bi-bucket',
    t: ['bucket', 'tool', 'pail', 'tools'],
  },
  {
    c: 'bi-bucket-fill',
    t: ['bucket', 'fill', 'tool', 'pail', 'tools'],
  },
  {
    c: 'bi-bug',
    t: ['bug', 'insect', 'error', 'real', 'world'],
  },
  {
    c: 'bi-bug-fill',
    t: ['bug', 'fill', 'insect', 'error', 'real', 'world'],
  },
  {
    c: 'bi-building',
    t: ['building', 'company', 'enterprise', 'organization', 'people'],
  },
  {
    c: 'bi-bullseye',
    t: ['bullseye', 'target', 'geo'],
  },
  {
    c: 'bi-calculator',
    t: ['calculator', 'math', 'devices'],
  },
  {
    c: 'bi-calculator-fill',
    t: ['calculator', 'fill', 'math', 'devices'],
  },
  {
    c: 'bi-calendar',
    t: ['calendar', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-check',
    t: ['calendar', 'check', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-check-fill',
    t: ['calendar', 'check', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-date',
    t: ['calendar', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-date-fill',
    t: ['calendar', 'date', 'fill', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-day',
    t: ['calendar', 'day', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-day-fill',
    t: ['calendar', 'day', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-event',
    t: ['calendar', 'event', 'date', 'time', 'invite', 'and'],
  },
  {
    c: 'bi-calendar-event-fill',
    t: ['calendar', 'event', 'fill', 'date', 'time', 'invite', 'and'],
  },
  {
    c: 'bi-calendar-fill',
    t: ['calendar', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-minus',
    t: ['calendar', 'minus', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-minus-fill',
    t: ['calendar', 'minus', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-month',
    t: ['calendar', 'month', 'date', 'time', 'and'],
  },
  {
    c: 'bi-calendar-month-fill',
    t: ['calendar', 'month', 'fill', 'date', 'time', 'and'],
  },
  {
    c: 'bi-calendar-plus',
    t: ['calendar', 'plus', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-plus-fill',
    t: ['calendar', 'plus', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar-range',
    t: ['calendar', 'range', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar-range-fill',
    t: ['calendar', 'range', 'fill', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar-week',
    t: ['calendar', 'week', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar-week-fill',
    t: ['calendar', 'week', 'fill', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar-x',
    t: ['calendar', 'x', 'date', 'time', 'month', 'remove', 'delete', 'and'],
  },
  {
    c: 'bi-calendar-x-fill',
    t: ['calendar', 'x', 'fill', 'date', 'time', 'month', 'remove', 'delete', 'and'],
  },
  {
    c: 'bi-calendar2',
    t: ['calendar2', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-check',
    t: ['calendar2', 'check', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-check-fill',
    t: ['calendar2', 'check', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-date',
    t: ['calendar2', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-date-fill',
    t: ['calendar2', 'date', 'fill', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-day',
    t: ['calendar2', 'day', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-day-fill',
    t: ['calendar2', 'day', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-event',
    t: ['calendar2', 'event', 'date', 'time', 'invite', 'and'],
  },
  {
    c: 'bi-calendar2-event-fill',
    t: ['calendar2', 'event', 'fill', 'date', 'time', 'invite', 'and'],
  },
  {
    c: 'bi-calendar2-fill',
    t: ['calendar2', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-minus',
    t: ['calendar2', 'minus', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-minus-fill',
    t: ['calendar2', 'minus', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-month',
    t: ['calendar2', 'month', 'date', 'time', 'and'],
  },
  {
    c: 'bi-calendar2-month-fill',
    t: ['calendar2', 'month', 'fill', 'date', 'time', 'and'],
  },
  {
    c: 'bi-calendar2-plus',
    t: ['calendar2', 'plus', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-plus-fill',
    t: ['calendar2', 'plus', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar2-range',
    t: ['calendar2', 'range', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar2-range-fill',
    t: ['calendar2', 'range', 'fill', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar2-week',
    t: ['calendar2', 'week', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar2-week-fill',
    t: ['calendar2', 'week', 'fill', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar2-x',
    t: ['calendar2', 'x', 'date', 'time', 'month', 'remove', 'delete', 'and'],
  },
  {
    c: 'bi-calendar2-x-fill',
    t: ['calendar2', 'x', 'fill', 'date', 'time', 'month', 'remove', 'delete', 'and'],
  },
  {
    c: 'bi-calendar3',
    t: ['calendar3', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar3-event',
    t: ['calendar3', 'event', 'date', 'time', 'invite', 'and'],
  },
  {
    c: 'bi-calendar3-event-fill',
    t: ['calendar3', 'event', 'fill', 'date', 'time', 'invite', 'and'],
  },
  {
    c: 'bi-calendar3-fill',
    t: ['calendar3', 'fill', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar3-range',
    t: ['calendar3', 'range', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar3-range-fill',
    t: ['calendar3', 'range', 'fill', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar3-week',
    t: ['calendar3', 'week', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar3-week-fill',
    t: ['calendar3', 'week', 'fill', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar4',
    t: ['calendar4', 'date', 'time', 'month', 'and'],
  },
  {
    c: 'bi-calendar4-event',
    t: ['calendar4', 'event', 'date', 'time', 'invite', 'and'],
  },
  {
    c: 'bi-calendar4-range',
    t: ['calendar4', 'range', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-calendar4-week',
    t: ['calendar4', 'week', 'dates', 'timeline', 'duration', 'date', 'and', 'time'],
  },
  {
    c: 'bi-camera',
    t: ['camera', 'photos', 'photography', 'devices'],
  },
  {
    c: 'bi-camera2',
    t: ['camera2', 'photos', 'photography', 'devices'],
  },
  {
    c: 'bi-camera-fill',
    t: ['camera', 'fill', 'photos', 'photography', 'devices'],
  },
  {
    c: 'bi-camera-reels',
    t: ['camera', 'reels', 'av', 'video', 'film', 'devices'],
  },
  {
    c: 'bi-camera-reels-fill',
    t: ['camera', 'reels', 'fill', 'av', 'video', 'film', 'devices'],
  },
  {
    c: 'bi-camera-video',
    t: ['camera', 'video', 'av', 'film', 'devices'],
  },
  {
    c: 'bi-camera-video-fill',
    t: ['camera', 'video', 'fill', 'av', 'film', 'devices'],
  },
  {
    c: 'bi-camera-video-off',
    t: ['camera', 'video', 'off', 'av', 'film', 'devices'],
  },
  {
    c: 'bi-camera-video-off-fill',
    t: ['camera', 'video', 'off', 'fill', 'av', 'film', 'devices'],
  },
  {
    c: 'bi-capslock',
    t: ['capslock', 'key', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-capslock-fill',
    t: ['capslock', 'fill', 'key', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-card-checklist',
    t: ['card', 'checklist', 'note', 'notecard', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-card-heading',
    t: ['card', 'heading', 'note', 'notecard', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-card-image',
    t: ['card', 'image', 'note', 'notecard', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-card-list',
    t: ['card', 'list', 'note', 'notecard', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-card-text',
    t: ['card', 'text', 'note', 'notecard', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-caret-down',
    t: ['caret', 'down', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-down-fill',
    t: ['caret', 'down', 'fill', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-down-square',
    t: ['caret', 'down', 'square', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-down-square-fill',
    t: ['caret', 'down', 'square', 'fill', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-left',
    t: ['caret', 'left', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-left-fill',
    t: ['caret', 'left', 'fill', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-left-square',
    t: ['caret', 'left', 'square', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-left-square-fill',
    t: ['caret', 'left', 'square', 'fill', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-right',
    t: ['caret', 'right', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-right-fill',
    t: ['caret', 'right', 'fill', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-right-square',
    t: ['caret', 'right', 'square', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-right-square-fill',
    t: ['caret', 'right', 'square', 'fill', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-up',
    t: ['caret', 'up', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-up-fill',
    t: ['caret', 'up', 'fill', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-up-square',
    t: ['caret', 'up', 'square', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-caret-up-square-fill',
    t: ['caret', 'up', 'square', 'fill', 'arrow', 'triangle', 'carets'],
  },
  {
    c: 'bi-cart',
    t: ['cart', 'shopping', 'checkout', 'check', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart-check',
    t: ['cart', 'check', 'shopping', 'checkout', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart-check-fill',
    t: ['cart', 'check', 'fill', 'shopping', 'checkout', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart-dash',
    t: ['cart', 'dash', 'shopping', 'checkout', 'check', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart-dash-fill',
    t: ['cart', 'dash', 'fill', 'shopping', 'checkout', 'check', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart-fill',
    t: ['cart', 'fill', 'shopping', 'checkout', 'check', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart-plus',
    t: ['cart', 'plus', 'shopping', 'checkout', 'check', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart-plus-fill',
    t: ['cart', 'plus', 'fill', 'shopping', 'checkout', 'check', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart-x',
    t: ['cart', 'x', 'shopping', 'checkout', 'check', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart-x-fill',
    t: ['cart', 'x', 'fill', 'shopping', 'checkout', 'check', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart2',
    t: ['cart2', 'shopping', 'checkout', 'check', 'cart', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart3',
    t: ['cart3', 'shopping', 'checkout', 'check', 'cart', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cart4',
    t: ['cart4', 'shopping', 'checkout', 'check', 'cart', 'basket', 'bag', 'commerce'],
  },
  {
    c: 'bi-cash',
    t: ['cash', 'money', 'bills', 'funds', 'wallet', 'currency', 'commerce'],
  },
  {
    c: 'bi-cash-stack',
    t: ['cash', 'stack', 'money', 'bills', 'funds', 'wallet', 'currency', 'commerce'],
  },
  {
    c: 'bi-cast',
    t: ['cast', 'airplay', 'project', 'stream', 'display', 'media'],
  },
  {
    c: 'bi-chat',
    t: ['chat', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-dots',
    t: ['chat', 'dots', 'bubble', 'text', 'message', 'typing', 'communications'],
  },
  {
    c: 'bi-chat-dots-fill',
    t: ['chat', 'dots', 'fill', 'bubble', 'text', 'message', 'typing', 'communications'],
  },
  {
    c: 'bi-chat-fill',
    t: ['chat', 'fill', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-left',
    t: ['chat', 'left', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-left-dots',
    t: ['chat', 'left', 'dots', 'bubble', 'text', 'message', 'typing', 'communications'],
  },
  {
    c: 'bi-chat-left-dots-fill',
    t: ['chat', 'left', 'dots', 'fill', 'bubble', 'text', 'message', 'typing', 'communications'],
  },
  {
    c: 'bi-chat-left-fill',
    t: ['chat', 'left', 'fill', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-left-quote',
    t: ['chat', 'left', 'quote', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-left-quote-fill',
    t: ['chat', 'left', 'quote', 'fill', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-left-text',
    t: ['chat', 'left', 'text', 'bubble', 'message', 'communications'],
  },
  {
    c: 'bi-chat-left-text-fill',
    t: ['chat', 'left', 'text', 'fill', 'bubble', 'message', 'communications'],
  },
  {
    c: 'bi-chat-quote',
    t: ['chat', 'quote', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-quote-fill',
    t: ['chat', 'quote', 'fill', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-right',
    t: ['chat', 'right', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-right-dots',
    t: ['chat', 'right', 'dots', 'bubble', 'text', 'message', 'typing', 'communications'],
  },
  {
    c: 'bi-chat-right-dots-fill',
    t: ['chat', 'right', 'dots', 'fill', 'bubble', 'text', 'message', 'typing', 'communications'],
  },
  {
    c: 'bi-chat-right-fill',
    t: ['chat', 'right', 'fill', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-right-quote',
    t: ['chat', 'right', 'quote', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-right-quote-fill',
    t: ['chat', 'right', 'quote', 'fill', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-right-text',
    t: ['chat', 'right', 'text', 'bubble', 'message', 'communications'],
  },
  {
    c: 'bi-chat-right-text-fill',
    t: ['chat', 'right', 'text', 'fill', 'bubble', 'message', 'communications'],
  },
  {
    c: 'bi-chat-square',
    t: ['chat', 'square', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-square-dots',
    t: ['chat', 'square', 'dots', 'bubble', 'text', 'message', 'typing', 'communications'],
  },
  {
    c: 'bi-chat-square-dots-fill',
    t: ['chat', 'square', 'dots', 'fill', 'bubble', 'text', 'message', 'typing', 'communications'],
  },
  {
    c: 'bi-chat-square-fill',
    t: ['chat', 'square', 'fill', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-square-quote',
    t: ['chat', 'square', 'quote', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-square-quote-fill',
    t: ['chat', 'square', 'quote', 'fill', 'bubble', 'text', 'message', 'communications'],
  },
  {
    c: 'bi-chat-square-text',
    t: ['chat', 'square', 'text', 'bubble', 'message', 'communications'],
  },
  {
    c: 'bi-chat-square-text-fill',
    t: ['chat', 'square', 'text', 'fill', 'bubble', 'message', 'communications'],
  },
  {
    c: 'bi-chat-text',
    t: ['chat', 'text', 'bubble', 'message', 'communications'],
  },
  {
    c: 'bi-chat-text-fill',
    t: ['chat', 'text', 'fill', 'bubble', 'message', 'communications'],
  },
  {
    c: 'bi-check',
    t: ['check', 'checkmark', 'confirm', 'done', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-check-all',
    t: ['check', 'all', 'checkmark', 'todo', 'done', 'select', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-check-circle',
    t: ['check', 'circle', 'checkmark', 'confirm', 'done', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-check-circle-fill',
    t: ['check', 'circle', 'fill', 'checkmark', 'confirm', 'done', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-check-square',
    t: ['check', 'square', 'checkmark', 'confirm', 'done', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-check-square-fill',
    t: ['check', 'square', 'fill', 'checkmark', 'confirm', 'done', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-check2',
    t: ['check2', 'checkmark', 'todo', 'select', 'done', 'checkbox', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-check2-all',
    t: ['check2', 'all', 'checkmark', 'todo', 'select', 'done', 'checkbox', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-check2-circle',
    t: ['check2', 'circle', 'checkmark', 'todo', 'select', 'done', 'checkbox', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-check2-square',
    t: ['check2', 'square', 'checkmark', 'todo', 'select', 'done', 'checkbox', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-chevron-bar-contract',
    t: ['chevron', 'bar', 'contract', 'chevrons'],
  },
  {
    c: 'bi-chevron-bar-down',
    t: ['chevron', 'bar', 'down', 'chevrons'],
  },
  {
    c: 'bi-chevron-bar-expand',
    t: ['chevron', 'bar', 'expand', 'chevrons'],
  },
  {
    c: 'bi-chevron-bar-left',
    t: ['chevron', 'bar', 'left', 'chevrons'],
  },
  {
    c: 'bi-chevron-bar-right',
    t: ['chevron', 'bar', 'right', 'chevrons'],
  },
  {
    c: 'bi-chevron-bar-up',
    t: ['chevron', 'bar', 'up', 'chevrons'],
  },
  {
    c: 'bi-chevron-compact-down',
    t: ['chevron', 'compact', 'down', 'chevrons'],
  },
  {
    c: 'bi-chevron-compact-left',
    t: ['chevron', 'compact', 'left', 'chevrons'],
  },
  {
    c: 'bi-chevron-compact-right',
    t: ['chevron', 'compact', 'right', 'chevrons'],
  },
  {
    c: 'bi-chevron-compact-up',
    t: ['chevron', 'compact', 'up', 'chevrons'],
  },
  {
    c: 'bi-chevron-contract',
    t: ['chevron', 'contract', 'chevrons'],
  },
  {
    c: 'bi-chevron-double-down',
    t: ['chevron', 'double', 'down', 'chevrons'],
  },
  {
    c: 'bi-chevron-double-left',
    t: ['chevron', 'double', 'left', 'chevrons'],
  },
  {
    c: 'bi-chevron-double-right',
    t: ['chevron', 'double', 'right', 'chevrons'],
  },
  {
    c: 'bi-chevron-double-up',
    t: ['chevron', 'double', 'up', 'chevrons'],
  },
  {
    c: 'bi-chevron-down',
    t: ['chevron', 'down', 'chevrons'],
  },
  {
    c: 'bi-chevron-expand',
    t: ['chevron', 'expand'],
  },
  {
    c: 'bi-chevron-left',
    t: ['chevron', 'left', 'chevrons'],
  },
  {
    c: 'bi-chevron-right',
    t: ['chevron', 'right', 'chevrons'],
  },
  {
    c: 'bi-chevron-up',
    t: ['chevron', 'up', 'chevrons'],
  },
  {
    c: 'bi-circle',
    t: ['circle', 'shape', 'shapes'],
  },
  {
    c: 'bi-circle-fill',
    t: ['circle', 'fill', 'shape', 'shapes'],
  },
  {
    c: 'bi-circle-half',
    t: ['circle', 'half', 'shape', 'shapes'],
  },
  {
    c: 'bi-slash-circle',
    t: ['slash', 'circle', 'shape', 'stop', 'ban', 'false', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-circle-square',
    t: ['circle', 'square', 'graphics', 'vector', 'merge', 'layers'],
  },
  {
    c: 'bi-clipboard',
    t: ['clipboard', 'copy', 'paste', 'real', 'world'],
  },
  {
    c: 'bi-clipboard-check',
    t: ['clipboard', 'check', 'copy', 'paste', 'real', 'world'],
  },
  {
    c: 'bi-clipboard-data',
    t: ['clipboard', 'data', 'copy', 'paste', 'analytics', 'graph', 'chart', 'real', 'world'],
  },
  {
    c: 'bi-clipboard-minus',
    t: ['clipboard', 'minus', 'copy', 'paste', 'real', 'world'],
  },
  {
    c: 'bi-clipboard-plus',
    t: ['clipboard', 'plus', 'copy', 'paste', 'real', 'world'],
  },
  {
    c: 'bi-clipboard-x',
    t: ['clipboard', 'x', 'copy', 'paste', 'real', 'world'],
  },
  {
    c: 'bi-clock',
    t: ['clock', 'time', 'miscellaneous'],
  },
  {
    c: 'bi-clock-fill',
    t: ['clock', 'fill', 'time', 'miscellaneous'],
  },
  {
    c: 'bi-clock-history',
    t: ['clock', 'history', 'time', 'miscellaneous'],
  },
  {
    c: 'bi-cloud',
    t: ['cloud', 'weather', 'clouds'],
  },
  {
    c: 'bi-cloud-arrow-down',
    t: ['cloud', 'arrow', 'down', 'download', 'clouds'],
  },
  {
    c: 'bi-cloud-arrow-down-fill',
    t: ['cloud', 'arrow', 'down', 'fill', 'download', 'clouds'],
  },
  {
    c: 'bi-cloud-arrow-up',
    t: ['cloud', 'arrow', 'up', 'upload', 'clouds'],
  },
  {
    c: 'bi-cloud-arrow-up-fill',
    t: ['cloud', 'arrow', 'up', 'fill', 'upload', 'clouds'],
  },
  {
    c: 'bi-cloud-check',
    t: ['cloud', 'check', 'checkmark', 'clouds'],
  },
  {
    c: 'bi-cloud-check-fill',
    t: ['cloud', 'check', 'fill', 'checkmark', 'clouds'],
  },
  {
    c: 'bi-cloud-download',
    t: ['cloud', 'download', 'arrow', 'clouds'],
  },
  {
    c: 'bi-cloud-download-fill',
    t: ['cloud', 'download', 'fill', 'arrow', 'clouds'],
  },
  {
    c: 'bi-cloud-drizzle',
    t: ['cloud', 'drizzle', 'storm', 'rain', 'weather'],
  },
  {
    c: 'bi-cloud-drizzle-fill',
    t: ['cloud', 'drizzle', 'fill', 'storm', 'rain', 'weather'],
  },
  {
    c: 'bi-cloud-fill',
    t: ['cloud', 'fill', 'weather', 'clouds'],
  },
  {
    c: 'bi-cloud-fog',
    t: ['cloud', 'fog', 'foggy', 'weather'],
  },
  {
    c: 'bi-cloud-fog-fill',
    t: ['cloud', 'fog', 'fill', 'foggy', 'weather'],
  },
  {
    c: 'bi-cloud-fog2',
    t: ['cloud', 'fog2', 'foggy', 'weather'],
  },
  {
    c: 'bi-cloud-fog2-fill',
    t: ['cloud', 'fog2', 'fill', 'foggy', 'weather'],
  },
  {
    c: 'bi-cloud-hail',
    t: ['cloud', 'hail', 'storm', 'weather'],
  },
  {
    c: 'bi-cloud-hail-fill',
    t: ['cloud', 'hail', 'fill', 'storm', 'weather'],
  },
  {
    c: 'bi-cloud-haze',
    t: ['cloud', 'haze', 'smog', 'weather'],
  },
  {
    c: 'bi-cloud-haze-1',
    t: ['cloud', 'haze', '1', 'smog', 'weather'],
  },
  {
    c: 'bi-cloud-haze-fill',
    t: ['cloud', 'haze', 'fill', 'smog', 'weather'],
  },
  {
    c: 'bi-cloud-haze2-fill',
    t: ['cloud', 'haze2', 'fill', 'smog', 'weather'],
  },
  {
    c: 'bi-cloud-lightning',
    t: ['cloud', 'lightning', 'thunder', 'storm', 'weather'],
  },
  {
    c: 'bi-cloud-lightning-fill',
    t: ['cloud', 'lightning', 'fill', 'thunder', 'storm', 'weather'],
  },
  {
    c: 'bi-cloud-lightning-rain',
    t: ['cloud', 'lightning', 'rain', 'thunder', 'storm', 'weather'],
  },
  {
    c: 'bi-cloud-lightning-rain-fill',
    t: ['cloud', 'lightning', 'rain', 'fill', 'thunder', 'storm', 'weather'],
  },
  {
    c: 'bi-cloud-minus',
    t: ['cloud', 'minus', 'subtract', 'clouds'],
  },
  {
    c: 'bi-cloud-minus-fill',
    t: ['cloud', 'minus', 'fill', 'subtract', 'clouds'],
  },
  {
    c: 'bi-cloud-moon',
    t: ['cloud', 'moon', 'cloudy', 'overcast', 'weather'],
  },
  {
    c: 'bi-cloud-moon-fill',
    t: ['cloud', 'moon', 'fill', 'cloudy', 'overcast', 'weather'],
  },
  {
    c: 'bi-cloud-plus',
    t: ['cloud', 'plus', 'add', 'new', 'clouds'],
  },
  {
    c: 'bi-cloud-plus-fill',
    t: ['cloud', 'plus', 'fill', 'add', 'new', 'clouds'],
  },
  {
    c: 'bi-cloud-rain',
    t: ['cloud', 'rain', 'rainstorm', 'storm', 'weather'],
  },
  {
    c: 'bi-cloud-rain-fill',
    t: ['cloud', 'rain', 'fill', 'rainstorm', 'storm', 'weather'],
  },
  {
    c: 'bi-cloud-rain-heavy',
    t: ['cloud', 'rain', 'heavy', 'rainstorm', 'storm', 'weather'],
  },
  {
    c: 'bi-cloud-rain-heavy-fill',
    t: ['cloud', 'rain', 'heavy', 'fill', 'rainstorm', 'storm', 'weather'],
  },
  {
    c: 'bi-cloud-slash',
    t: ['cloud', 'slash', 'clouds'],
  },
  {
    c: 'bi-cloud-slash-fill',
    t: ['cloud', 'slash', 'fill', 'clouds'],
  },
  {
    c: 'bi-cloud-sleet',
    t: ['cloud', 'sleet', 'blizzard', 'flurries', 'weather'],
  },
  {
    c: 'bi-cloud-sleet-fill',
    t: ['cloud', 'sleet', 'fill', 'blizzard', 'flurries', 'weather'],
  },
  {
    c: 'bi-cloud-snow',
    t: ['cloud', 'snow', 'blizzard', 'flurries', 'weather'],
  },
  {
    c: 'bi-cloud-snow-fill',
    t: ['cloud', 'snow', 'fill', 'blizzard', 'flurries', 'weather'],
  },
  {
    c: 'bi-cloud-sun',
    t: ['cloud', 'sun', 'cloudy', 'overcast', 'weather'],
  },
  {
    c: 'bi-cloud-sun-fill',
    t: ['cloud', 'sun', 'fill', 'cloudy', 'overcast', 'weather'],
  },
  {
    c: 'bi-cloud-upload',
    t: ['cloud', 'upload', 'clouds'],
  },
  {
    c: 'bi-cloud-upload-fill',
    t: ['cloud', 'upload', 'fill', 'clouds'],
  },
  {
    c: 'bi-clouds',
    t: ['clouds', 'overcast', 'weather'],
  },
  {
    c: 'bi-clouds-fill',
    t: ['clouds', 'fill', 'overcast', 'weather'],
  },
  {
    c: 'bi-cloudy',
    t: ['cloudy', 'clouds', 'overcast', 'weather'],
  },
  {
    c: 'bi-cloudy-fill',
    t: ['cloudy', 'fill', 'clouds', 'overcast', 'weather'],
  },
  {
    c: 'bi-code',
    t: ['code', 'text', 'type', 'typography'],
  },
  {
    c: 'bi-code-slash',
    t: ['code', 'slash', 'text', 'type', 'typography'],
  },
  {
    c: 'bi-code-square',
    t: ['code', 'square', 'text', 'type', 'preformatted', 'typography'],
  },
  {
    c: 'bi-collection',
    t: ['collection', 'library', 'group', 'media'],
  },
  {
    c: 'bi-collection-fill',
    t: ['collection', 'fill', 'library', 'group', 'media'],
  },
  {
    c: 'bi-collection-play',
    t: ['collection', 'play', 'library', 'group', 'media'],
  },
  {
    c: 'bi-collection-play-fill',
    t: ['collection', 'play', 'fill', 'library', 'group', 'media'],
  },
  {
    c: 'bi-columns',
    t: ['columns', 'grid', 'layout'],
  },
  {
    c: 'bi-columns-gap',
    t: ['columns', 'gap', 'grid', 'layout'],
  },
  {
    c: 'bi-command',
    t: ['command', 'key', 'mac', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-compass',
    t: ['compass', 'direction', 'map', 'location', 'geo'],
  },
  {
    c: 'bi-compass-fill',
    t: ['compass', 'fill', 'direction', 'map', 'location', 'geo'],
  },
  {
    c: 'bi-cone',
    t: ['cone', 'construction', 'warning', 'safety', 'real', 'world'],
  },
  {
    c: 'bi-cone-striped',
    t: ['cone', 'striped', 'construction', 'warning', 'safety', 'real', 'world'],
  },
  {
    c: 'bi-controller',
    t: ['controller', 'game', 'gaming', 'video-game', 'devices'],
  },
  {
    c: 'bi-cpu',
    t: ['cpu', 'processor', 'chip', 'computer', 'devices'],
  },
  {
    c: 'bi-cpu-fill',
    t: ['cpu', 'fill', 'processor', 'chip', 'computer', 'devices'],
  },
  {
    c: 'bi-credit-card',
    t: ['credit', 'card', 'debit', 'payment', 'real', 'world'],
  },
  {
    c: 'bi-credit-card-2-back',
    t: ['credit', 'card', '2', 'back', 'debit', 'payment', 'real', 'world'],
  },
  {
    c: 'bi-credit-card-2-back-fill',
    t: ['credit', 'card', '2', 'back', 'fill', 'debit', 'payment', 'real', 'world'],
  },
  {
    c: 'bi-credit-card-2-front',
    t: ['credit', 'card', '2', 'front', 'debit', 'payment', 'real', 'world'],
  },
  {
    c: 'bi-credit-card-2-front-fill',
    t: ['credit', 'card', '2', 'front', 'fill', 'debit', 'payment', 'real', 'world'],
  },
  {
    c: 'bi-credit-card-fill',
    t: ['credit', 'card', 'fill', 'debit', 'payment', 'real', 'world'],
  },
  {
    c: 'bi-crop',
    t: ['crop', 'graphics'],
  },
  {
    c: 'bi-cup',
    t: ['cup', 'mug', 'real', 'world'],
  },
  {
    c: 'bi-cup-fill',
    t: ['cup', 'fill', 'mug', 'real', 'world'],
  },
  {
    c: 'bi-cup-straw',
    t: ['cup', 'straw', 'mug', 'glass', 'drink', 'real', 'world'],
  },
  {
    c: 'bi-cursor',
    t: ['cursor', 'pointer', 'geo'],
  },
  {
    c: 'bi-cursor-fill',
    t: ['cursor', 'fill', 'pointer', 'geo'],
  },
  {
    c: 'bi-cursor-text',
    t: ['cursor', 'text', 'type', 'typography'],
  },
  {
    c: 'bi-dash',
    t: ['dash', 'minus', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-dash-circle',
    t: ['dash', 'circle', 'minus', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-dash-circle-dotted',
    t: ['dash', 'circle', 'dotted', 'minus', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-dash-circle-fill',
    t: ['dash', 'circle', 'fill', 'minus', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-dash-square',
    t: ['dash', 'square', 'minus', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-dash-square-dotted',
    t: ['dash', 'square', 'dotted', 'minus', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-dash-square-fill',
    t: ['dash', 'square', 'fill', 'minus', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-diagram-2',
    t: ['diagram', '2', 'node', 'sitemap', 'children', 'org', 'chart', 'graphics'],
  },
  {
    c: 'bi-diagram-2-fill',
    t: ['diagram', '2', 'fill', 'node', 'sitemap', 'children', 'org', 'chart', 'graphics'],
  },
  {
    c: 'bi-diagram-3',
    t: ['diagram', '3', 'node', 'sitemap', 'children', 'org', 'chart', 'graphics'],
  },
  {
    c: 'bi-diagram-3-fill',
    t: ['diagram', '3', 'fill', 'node', 'sitemap', 'children', 'org', 'chart', 'graphics'],
  },
  {
    c: 'bi-diamond',
    t: ['diamond', 'shape', 'shapes'],
  },
  {
    c: 'bi-diamond-fill',
    t: ['diamond', 'fill', 'shape', 'shapes'],
  },
  {
    c: 'bi-diamond-half',
    t: ['diamond', 'half', 'shape', 'shapes'],
  },
  {
    c: 'bi-dice-1',
    t: ['dice', '1', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-1-fill',
    t: ['dice', '1', 'fill', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-2',
    t: ['dice', '2', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-2-fill',
    t: ['dice', '2', 'fill', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-3',
    t: ['dice', '3', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-3-fill',
    t: ['dice', '3', 'fill', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-4',
    t: ['dice', '4', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-4-fill',
    t: ['dice', '4', 'fill', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-5',
    t: ['dice', '5', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-5-fill',
    t: ['dice', '5', 'fill', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-6',
    t: ['dice', '6', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-dice-6-fill',
    t: ['dice', '6', 'fill', 'die', 'games', 'gaming', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-disc',
    t: ['disc', 'cd', 'compact', 'bluray', 'dvd', 'media'],
  },
  {
    c: 'bi-disc-fill',
    t: ['disc', 'fill', 'cd', 'compact', 'bluray', 'dvd', 'media'],
  },
  {
    c: 'bi-discord',
    t: ['discord', 'social'],
  },
  {
    c: 'bi-display',
    t: ['display', 'monitor', 'external', 'devices'],
  },
  {
    c: 'bi-display-fill',
    t: ['display', 'fill', 'monitor', 'external', 'devices'],
  },
  {
    c: 'bi-distribute-horizontal',
    t: ['distribute', 'horizontal', 'space', 'align', 'graphics'],
  },
  {
    c: 'bi-distribute-vertical',
    t: ['distribute', 'vertical', 'space', 'align', 'graphics'],
  },
  {
    c: 'bi-door-closed',
    t: ['door', 'closed', 'logout', 'signout', 'real', 'world'],
  },
  {
    c: 'bi-door-closed-fill',
    t: ['door', 'closed', 'fill', 'logout', 'signout', 'real', 'world'],
  },
  {
    c: 'bi-door-open',
    t: ['door', 'open', 'login', 'signin', 'real', 'world'],
  },
  {
    c: 'bi-door-open-fill',
    t: ['door', 'open', 'fill', 'login', 'signin', 'real', 'world'],
  },
  {
    c: 'bi-dot',
    t: ['dot', 'middot', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-download',
    t: ['download', 'arrow', 'network', 'miscellaneous'],
  },
  {
    c: 'bi-droplet',
    t: ['droplet', 'water-drop', 'paint', 'ink', 'liquid', 'graphics'],
  },
  {
    c: 'bi-droplet-fill',
    t: ['droplet', 'fill', 'water-drop', 'paint', 'ink', 'liquid', 'graphics'],
  },
  {
    c: 'bi-droplet-half',
    t: ['droplet', 'half', 'water-drop', 'paint', 'ink', 'liquid', 'graphics'],
  },
  {
    c: 'bi-earbuds',
    t: ['earbuds', 'headphones', 'devices'],
  },
  {
    c: 'bi-easel',
    t: ['easel', 'paint', 'draw', 'art', 'present', 'graphics'],
  },
  {
    c: 'bi-easel-fill',
    t: ['easel', 'fill', 'paint', 'draw', 'art', 'present', 'graphics'],
  },
  {
    c: 'bi-egg',
    t: ['egg', 'food', 'real', 'world'],
  },
  {
    c: 'bi-egg-fill',
    t: ['egg', 'fill', 'food', 'real', 'world'],
  },
  {
    c: 'bi-egg-fried',
    t: ['egg', 'fried', 'food', 'real', 'world'],
  },
  {
    c: 'bi-eject',
    t: ['eject', 'disc', 'cd', 'dvd', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-eject-fill',
    t: ['eject', 'fill', 'disc', 'cd', 'dvd', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-emoji-angry',
    t: ['emoji', 'angry', 'emoticon', 'anger', 'upset'],
  },
  {
    c: 'bi-emoji-angry-fill',
    t: ['emoji', 'angry', 'fill', 'emoticon', 'anger', 'upset'],
  },
  {
    c: 'bi-emoji-dizzy',
    t: ['emoji', 'dizzy', 'emoticon'],
  },
  {
    c: 'bi-emoji-dizzy-fill',
    t: ['emoji', 'dizzy', 'fill', 'emoticon'],
  },
  {
    c: 'bi-emoji-expressionless',
    t: ['emoji', 'expressionless', 'emoticon', 'neutral', 'unphased'],
  },
  {
    c: 'bi-emoji-expressionless-fill',
    t: ['emoji', 'expressionless', 'fill', 'emoticon', 'neutral', 'unphased'],
  },
  {
    c: 'bi-emoji-frown',
    t: ['emoji', 'frown', 'emoticon', 'sad'],
  },
  {
    c: 'bi-emoji-frown-fill',
    t: ['emoji', 'frown', 'fill', 'emoticon', 'sad'],
  },
  {
    c: 'bi-emoji-heart-eyes',
    t: ['emoji', 'heart', 'eyes', 'emoticon', 'love'],
  },
  {
    c: 'bi-emoji-heart-eyes-fill',
    t: ['emoji', 'heart', 'eyes', 'fill', 'emoticon', 'love'],
  },
  {
    c: 'bi-emoji-laughing',
    t: ['emoji', 'laughing', 'emoticon', 'happy'],
  },
  {
    c: 'bi-emoji-laughing-fill',
    t: ['emoji', 'laughing', 'fill', 'emoticon', 'happy'],
  },
  {
    c: 'bi-emoji-neutral',
    t: ['emoji', 'neutral', 'emoticon', 'expressionless'],
  },
  {
    c: 'bi-emoji-neutral-fill',
    t: ['emoji', 'neutral', 'fill', 'emoticon', 'expressionless'],
  },
  {
    c: 'bi-emoji-smile',
    t: ['emoji', 'smile', 'emoticon', 'happy'],
  },
  {
    c: 'bi-emoji-smile-fill',
    t: ['emoji', 'smile', 'fill', 'emoticon', 'happy'],
  },
  {
    c: 'bi-emoji-smile-upside-down',
    t: ['emoji', 'smile', 'upside', 'down', 'emoticon', 'sarcasm'],
  },
  {
    c: 'bi-emoji-smile-upside-down-fill',
    t: ['emoji', 'smile', 'upside', 'down', 'fill', 'emoticon', 'sarcasm'],
  },
  {
    c: 'bi-emoji-sunglasses',
    t: ['emoji', 'sunglasses', 'emoticon', 'cool'],
  },
  {
    c: 'bi-emoji-sunglasses-fill',
    t: ['emoji', 'sunglasses', 'fill', 'emoticon', 'cool'],
  },
  {
    c: 'bi-emoji-wink',
    t: ['emoji', 'wink', 'emoticon'],
  },
  {
    c: 'bi-emoji-wink-fill',
    t: ['emoji', 'wink', 'fill', 'emoticon'],
  },
  {
    c: 'bi-envelope',
    t: ['envelope', 'email', 'message', 'mail', 'communications'],
  },
  {
    c: 'bi-envelope-fill',
    t: ['envelope', 'fill', 'email', 'message', 'mail', 'communications'],
  },
  {
    c: 'bi-envelope-open',
    t: ['envelope', 'open', 'email', 'message', 'mail', 'communications'],
  },
  {
    c: 'bi-envelope-open-fill',
    t: ['envelope', 'open', 'fill', 'email', 'message', 'mail', 'communications'],
  },
  {
    c: 'bi-eraser',
    t: ['eraser', 'erase', 'remove', 'graphics'],
  },
  {
    c: 'bi-eraser-fill',
    t: ['eraser', 'fill', 'erase', 'remove', 'graphics'],
  },
  {
    c: 'bi-exclamation',
    t: ['exclamation', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclamation-circle',
    t: ['exclamation', 'circle', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclamation-circle-fill',
    t: ['exclamation', 'circle', 'fill', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclamation-diamond',
    t: ['exclamation', 'diamond', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclamation-diamond-fill',
    t: ['exclamation', 'diamond', 'fill', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclamation-octagon',
    t: ['exclamation', 'octagon', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclamation-octagon-fill',
    t: ['exclamation', 'octagon', 'fill', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclamation-square',
    t: ['exclamation', 'square', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclamation-square-fill',
    t: ['exclamation', 'square', 'fill', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclamation-triangle',
    t: ['exclamation', 'triangle', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclamation-triangle-fill',
    t: ['exclamation', 'triangle', 'fill', 'alert', 'warning', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-exclude',
    t: ['exclude', 'graphics', 'vector', 'merge', 'layers'],
  },
  {
    c: 'bi-eye',
    t: ['eye', 'eyeball', 'look', 'see', 'real', 'world'],
  },
  {
    c: 'bi-eye-fill',
    t: ['eye', 'fill', 'eyeball', 'look', 'see', 'real', 'world'],
  },
  {
    c: 'bi-eye-slash',
    t: ['eye', 'slash', 'eyeball', 'look', 'see', 'real', 'world'],
  },
  {
    c: 'bi-eye-slash-fill',
    t: ['eye', 'slash', 'fill', 'eyeball', 'look', 'see', 'real', 'world'],
  },
  {
    c: 'bi-eyedropper',
    t: ['eyedropper', 'color', 'picker', 'graphics'],
  },
  {
    c: 'bi-eyeglasses',
    t: ['eyeglasses', 'eyeball', 'look', 'see', 'glasses', 'reading', 'real', 'world'],
  },
  {
    c: 'bi-facebook',
    t: ['facebook', 'social'],
  },
  {
    c: 'bi-file',
    t: ['file', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-arrow-down',
    t: ['file', 'arrow', 'down', 'doc', 'document', 'download', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-arrow-down-fill',
    t: ['file', 'arrow', 'down', 'fill', 'doc', 'document', 'download', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-arrow-up',
    t: ['file', 'arrow', 'up', 'doc', 'document', 'upload', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-arrow-up-fill',
    t: ['file', 'arrow', 'up', 'fill', 'doc', 'document', 'upload', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-bar-graph',
    t: ['file', 'bar', 'graph', 'doc', 'document', 'data', 'chart', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-bar-graph-fill',
    t: ['file', 'bar', 'graph', 'fill', 'doc', 'document', 'data', 'chart', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-binary',
    t: ['file', 'binary', 'doc', 'document', 'source', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-binary-fill',
    t: ['file', 'binary', 'fill', 'doc', 'document', 'source', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-break',
    t: ['file', 'break', 'doc', 'document', 'page-break', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-break-fill',
    t: ['file', 'break', 'fill', 'doc', 'document', 'page-break', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-check',
    t: ['file', 'check', 'doc', 'document', 'verified', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-check-fill',
    t: ['file', 'check', 'fill', 'doc', 'document', 'verified', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-code',
    t: ['file', 'code', 'doc', 'document', 'development', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-code-fill',
    t: ['file', 'code', 'fill', 'doc', 'document', 'development', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-diff',
    t: ['file', 'diff', 'doc', 'document', 'version', 'development', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-diff-fill',
    t: ['file', 'diff', 'fill', 'doc', 'document', 'version', 'development', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark',
    t: ['file', 'earmark', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-arrow-down',
    t: ['file', 'earmark', 'arrow', 'down', 'doc', 'document', 'download', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-arrow-down-fill',
    t: ['file', 'earmark', 'arrow', 'down', 'fill', 'doc', 'document', 'download', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-arrow-up',
    t: ['file', 'earmark', 'arrow', 'up', 'doc', 'document', 'upload', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-arrow-up-fill',
    t: ['file', 'earmark', 'arrow', 'up', 'fill', 'doc', 'document', 'upload', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-bar-graph',
    t: ['file', 'earmark', 'bar', 'graph', 'doc', 'document', 'data', 'chart', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-bar-graph-fill',
    t: ['file', 'earmark', 'bar', 'graph', 'fill', 'doc', 'document', 'data', 'chart', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-binary',
    t: ['file', 'earmark', 'binary', 'doc', 'document', 'source', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-binary-fill',
    t: ['file', 'earmark', 'binary', 'fill', 'doc', 'document', 'source', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-break',
    t: ['file', 'earmark', 'break', 'doc', 'document', 'page-break', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-break-fill',
    t: ['file', 'earmark', 'break', 'fill', 'doc', 'document', 'page-break', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-check',
    t: ['file', 'earmark', 'check', 'doc', 'document', 'verified', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-check-fill',
    t: ['file', 'earmark', 'check', 'fill', 'doc', 'document', 'verified', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-code',
    t: ['file', 'earmark', 'code', 'doc', 'document', 'development', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-code-fill',
    t: ['file', 'earmark', 'code', 'fill', 'doc', 'document', 'development', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-diff',
    t: ['file', 'earmark', 'diff', 'doc', 'document', 'version', 'development', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-diff-fill',
    t: ['file', 'earmark', 'diff', 'fill', 'doc', 'document', 'version', 'development', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-easel',
    t: ['file', 'earmark', 'easel', 'slides', 'presentation', 'powerpoint', 'keynote', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-easel-fill',
    t: ['file', 'earmark', 'easel', 'fill', 'slides', 'presentation', 'powerpoint', 'keynote', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-excel',
    t: ['file', 'earmark', 'excel', 'doc', 'document', 'spreadsheet', 'table', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-excel-fill',
    t: ['file', 'earmark', 'excel', 'fill', 'doc', 'document', 'spreadsheet', 'table', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-fill',
    t: ['file', 'earmark', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-font',
    t: ['file', 'earmark', 'font', 'ttf', 'otf', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-font-fill',
    t: ['file', 'earmark', 'font', 'fill', 'ttf', 'otf', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-image',
    t: ['file', 'earmark', 'image', 'photo', 'picture', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-image-fill',
    t: ['file', 'earmark', 'image', 'fill', 'photo', 'picture', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-lock',
    t: ['file', 'earmark', 'lock', 'private', 'secure', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-lock-fill',
    t: ['file', 'earmark', 'lock', 'fill', 'private', 'secure', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-lock2',
    t: ['file', 'earmark', 'lock2', 'lock', 'private', 'secure', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-lock2-fill',
    t: ['file', 'earmark', 'lock2', 'fill', 'lock', 'private', 'secure', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-medical',
    t: ['file', 'earmark', 'medical', 'doc', 'document', 'hospital', 'health', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-medical-fill',
    t: ['file', 'earmark', 'medical', 'fill', 'doc', 'document', 'hospital', 'health', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-minus',
    t: ['file', 'earmark', 'minus', 'doc', 'document', 'delete', 'remove', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-minus-fill',
    t: ['file', 'earmark', 'minus', 'fill', 'doc', 'document', 'delete', 'remove', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-music',
    t: ['file', 'earmark', 'music', 'doc', 'document', 'audio', 'playlist', 'songs', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-music-fill',
    t: ['file', 'earmark', 'music', 'fill', 'doc', 'document', 'audio', 'playlist', 'songs', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-person',
    t: ['file', 'earmark', 'person', 'doc', 'document', 'personal', 'cv', 'resume', 'about', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-person-fill',
    t: ['file', 'earmark', 'person', 'fill', 'doc', 'document', 'personal', 'cv', 'resume', 'about', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-play',
    t: ['file', 'earmark', 'play', 'video', 'present', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-play-fill',
    t: ['file', 'earmark', 'play', 'fill', 'video', 'present', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-plus',
    t: ['file', 'earmark', 'plus', 'doc', 'document', 'add', 'new', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-plus-fill',
    t: ['file', 'earmark', 'plus', 'fill', 'doc', 'document', 'add', 'new', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-post',
    t: ['file', 'earmark', 'post', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-post-fill',
    t: ['file', 'earmark', 'post', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-ppt',
    t: ['file', 'earmark', 'ppt', 'slides', 'presentation', 'powerpoint', 'keynote', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-ppt-fill',
    t: ['file', 'earmark', 'ppt', 'fill', 'slides', 'presentation', 'powerpoint', 'keynote', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-richtext',
    t: ['file', 'earmark', 'richtext', 'text', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-richtext-fill',
    t: ['file', 'earmark', 'richtext', 'fill', 'text', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-ruled',
    t: ['file', 'earmark', 'ruled', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-ruled-fill',
    t: ['file', 'earmark', 'ruled', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-slides',
    t: ['file', 'earmark', 'slides', 'presentation', 'keynote', 'powerpoint', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-slides-fill',
    t: ['file', 'earmark', 'slides', 'fill', 'presentation', 'keynote', 'powerpoint', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-spreadsheet',
    t: ['file', 'earmark', 'spreadsheet', 'doc', 'document', 'excel', 'table', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-spreadsheet-fill',
    t: ['file', 'earmark', 'spreadsheet', 'fill', 'doc', 'document', 'excel', 'table', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-text',
    t: ['file', 'earmark', 'text', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-text-fill',
    t: ['file', 'earmark', 'text', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-word',
    t: ['file', 'earmark', 'word', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-word-fill',
    t: ['file', 'earmark', 'word', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-x',
    t: ['file', 'earmark', 'x', 'document', 'remove', 'delete', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-x-fill',
    t: ['file', 'earmark', 'x', 'fill', 'document', 'remove', 'delete', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-zip',
    t: ['file', 'earmark', 'zip', 'doc', 'document', 'archive', 'compress', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-earmark-zip-fill',
    t: ['file', 'earmark', 'zip', 'fill', 'doc', 'document', 'archive', 'compress', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-easel',
    t: ['file', 'easel', 'slides', 'presentation', 'powerpoint', 'keynote', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-easel-fill',
    t: ['file', 'easel', 'fill', 'slides', 'presentation', 'powerpoint', 'keynote', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-excel',
    t: ['file', 'excel', 'doc', 'document', 'spreadsheet', 'table', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-excel-fill',
    t: ['file', 'excel', 'fill', 'doc', 'document', 'spreadsheet', 'table', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-fill',
    t: ['file', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-font',
    t: ['file', 'font', 'ttf', 'otf', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-font-fill',
    t: ['file', 'font', 'fill', 'ttf', 'otf', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-image',
    t: ['file', 'image', 'photo', 'picture', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-image-fill',
    t: ['file', 'image', 'fill', 'photo', 'picture', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-lock',
    t: ['file', 'lock', 'private', 'secure', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-lock-fill',
    t: ['file', 'lock', 'fill', 'private', 'secure', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-lock2',
    t: ['file', 'lock2', 'lock', 'private', 'secure', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-lock2-fill',
    t: ['file', 'lock2', 'fill', 'lock', 'private', 'secure', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-medical',
    t: ['file', 'medical', 'doc', 'document', 'hospital', 'health', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-medical-fill',
    t: ['file', 'medical', 'fill', 'doc', 'document', 'hospital', 'health', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-minus',
    t: ['file', 'minus', 'doc', 'document', 'delete', 'remove', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-minus-fill',
    t: ['file', 'minus', 'fill', 'doc', 'document', 'delete', 'remove', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-music',
    t: ['file', 'music', 'doc', 'document', 'audio', 'playlist', 'songs', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-music-fill',
    t: ['file', 'music', 'fill', 'doc', 'document', 'audio', 'playlist', 'songs', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-person',
    t: ['file', 'person', 'doc', 'document', 'personal', 'cv', 'resume', 'about', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-person-fill',
    t: ['file', 'person', 'fill', 'doc', 'document', 'personal', 'cv', 'resume', 'about', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-play',
    t: ['file', 'play', 'video', 'present', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-play-fill',
    t: ['file', 'play', 'fill', 'video', 'present', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-plus',
    t: ['file', 'plus', 'doc', 'document', 'add', 'new', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-plus-fill',
    t: ['file', 'plus', 'fill', 'doc', 'document', 'add', 'new', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-post',
    t: ['file', 'post', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-post-fill',
    t: ['file', 'post', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-ppt',
    t: ['file', 'ppt', 'slides', 'presentation', 'powerpoint', 'keynote', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-ppt-fill',
    t: ['file', 'ppt', 'fill', 'slides', 'presentation', 'powerpoint', 'keynote', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-richtext',
    t: ['file', 'richtext', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-richtext-fill',
    t: ['file', 'richtext', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-ruled',
    t: ['file', 'ruled', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-ruled-fill',
    t: ['file', 'ruled', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-slides',
    t: ['file', 'slides', 'presentation', 'keynote', 'powerpoint', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-slides-fill',
    t: ['file', 'slides', 'fill', 'presentation', 'keynote', 'powerpoint', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-spreadsheet',
    t: ['file', 'spreadsheet', 'doc', 'document', 'excel', 'table', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-spreadsheet-fill',
    t: ['file', 'spreadsheet', 'fill', 'doc', 'document', 'excel', 'table', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-text',
    t: ['file', 'text', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-text-fill',
    t: ['file', 'text', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-word',
    t: ['file', 'word', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-word-fill',
    t: ['file', 'word', 'fill', 'doc', 'document', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-x',
    t: ['file', 'x', 'document', 'remove', 'delete', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-x-fill',
    t: ['file', 'x', 'fill', 'document', 'remove', 'delete', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-zip',
    t: ['file', 'zip', 'doc', 'document', 'archive', 'compress', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-file-zip-fill',
    t: ['file', 'zip', 'fill', 'doc', 'document', 'archive', 'compress', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-files',
    t: ['files', 'doc', 'document', 'and', 'folders'],
  },
  {
    c: 'bi-files-alt',
    t: ['files', 'alt', 'doc', 'document', 'and', 'folders'],
  },
  {
    c: 'bi-film',
    t: ['film', 'video', 'movie', 'media'],
  },
  {
    c: 'bi-filter',
    t: ['filter', 'sort', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-filter-circle',
    t: ['filter', 'circle', 'sort', 'organize', 'and'],
  },
  {
    c: 'bi-filter-circle-fill',
    t: ['filter', 'circle', 'fill', 'sort', 'organize', 'and'],
  },
  {
    c: 'bi-filter-left',
    t: ['filter', 'left', 'sort', 'organize', 'and'],
  },
  {
    c: 'bi-filter-right',
    t: ['filter', 'right', 'sort', 'organize', 'and'],
  },
  {
    c: 'bi-filter-square',
    t: ['filter', 'square', 'sort', 'organize', 'and'],
  },
  {
    c: 'bi-filter-square-fill',
    t: ['filter', 'square', 'fill', 'sort', 'organize', 'and'],
  },
  {
    c: 'bi-flag',
    t: ['flag', 'report', 'communications'],
  },
  {
    c: 'bi-flag-fill',
    t: ['flag', 'fill', 'report', 'communications'],
  },
  {
    c: 'bi-flower1',
    t: ['flower1', 'plant', 'bloom', 'flower', 'real', 'world'],
  },
  {
    c: 'bi-flower2',
    t: ['flower2', 'plant', 'bloom', 'flower', 'real', 'world'],
  },
  {
    c: 'bi-flower3',
    t: ['flower3', 'plant', 'bloom', 'flower', 'real', 'world'],
  },
  {
    c: 'bi-folder',
    t: ['folder', 'directory', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-folder-check',
    t: ['folder', 'check', 'directory', 'verified', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-folder-fill',
    t: ['folder', 'fill', 'directory', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-folder-minus',
    t: ['folder', 'minus', 'directory', 'delete', 'remove', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-folder-plus',
    t: ['folder', 'plus', 'directory', 'delete', 'add', 'new', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-folder-symlink',
    t: ['folder', 'symlink', 'directory', 'symbolic-link', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-folder-symlink-fill',
    t: ['folder', 'symlink', 'fill', 'directory', 'symbolic-link', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-folder-x',
    t: ['folder', 'x', 'directory', 'remove', 'delete', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-folder2',
    t: ['folder2', 'directory', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-folder2-open',
    t: ['folder2', 'open', 'directory', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-fonts',
    t: ['fonts', 'text', 'type', 'typography'],
  },
  {
    c: 'bi-forward',
    t: ['forward', 'mail', 'email', 'communications'],
  },
  {
    c: 'bi-forward-fill',
    t: ['forward', 'fill', 'mail', 'email', 'communications'],
  },
  {
    c: 'bi-front',
    t: ['front', 'forward', 'layer', 'graphics'],
  },
  {
    c: 'bi-fullscreen',
    t: ['fullscreen', 'window', 'maximize', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-fullscreen-exit',
    t: ['fullscreen', 'exit', 'window', 'minimize', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-funnel',
    t: ['funnel', 'sort', 'filter', 'real', 'world'],
  },
  {
    c: 'bi-funnel-fill',
    t: ['funnel', 'fill', 'sort', 'filter', 'real', 'world'],
  },
  {
    c: 'bi-gear',
    t: ['gear', 'tool', 'settings', 'preferences', 'tools'],
  },
  {
    c: 'bi-gear-fill',
    t: ['gear', 'fill', 'tool', 'settings', 'preferences', 'tools'],
  },
  {
    c: 'bi-gear-wide',
    t: ['gear', 'wide', 'tool', 'settings', 'preferences', 'tools'],
  },
  {
    c: 'bi-gear-wide-connected',
    t: ['gear', 'wide', 'connected', 'tool', 'settings', 'preferences', 'tools'],
  },
  {
    c: 'bi-gem',
    t: ['gem', 'shape', 'diamond', 'shapes'],
  },
  {
    c: 'bi-geo',
    t: ['geo', 'geography', 'map', 'pin', 'location'],
  },
  {
    c: 'bi-geo-alt',
    t: ['geo', 'alt', 'geography', 'map', 'pin', 'location'],
  },
  {
    c: 'bi-geo-alt-fill',
    t: ['geo', 'alt', 'fill', 'geography', 'map', 'pin', 'location'],
  },
  {
    c: 'bi-geo-fill',
    t: ['geo', 'fill', 'geography', 'map', 'pin', 'location'],
  },
  {
    c: 'bi-gift',
    t: ['gift', 'present', 'real', 'world'],
  },
  {
    c: 'bi-gift-fill',
    t: ['gift', 'fill', 'present', 'real', 'world'],
  },
  {
    c: 'bi-github',
    t: ['github', 'social'],
  },
  {
    c: 'bi-globe',
    t: ['globe', 'world', 'translate', 'global', 'international', 'communications'],
  },
  {
    c: 'bi-globe2',
    t: ['globe2', 'world', 'translate', 'global', 'international', 'communications'],
  },
  {
    c: 'bi-google',
    t: ['google', 'social'],
  },
  {
    c: 'bi-graph-down',
    t: ['graph', 'down', 'chart', 'analytics', 'data'],
  },
  {
    c: 'bi-graph-up',
    t: ['graph', 'up', 'chart', 'analytics', 'data'],
  },
  {
    c: 'bi-grid',
    t: ['grid', 'layout'],
  },
  {
    c: 'bi-grid-1x2',
    t: ['grid', '1x2', 'layout'],
  },
  {
    c: 'bi-grid-1x2-fill',
    t: ['grid', '1x2', 'fill', 'layout'],
  },
  {
    c: 'bi-grid-3x2',
    t: ['grid', '3x2', 'layout'],
  },
  {
    c: 'bi-grid-3x2-gap',
    t: ['grid', '3x2', 'gap', 'layout'],
  },
  {
    c: 'bi-grid-3x2-gap-fill',
    t: ['grid', '3x2', 'gap', 'fill', 'layout'],
  },
  {
    c: 'bi-grid-3x3',
    t: ['grid', '3x3', 'layout'],
  },
  {
    c: 'bi-grid-3x3-gap',
    t: ['grid', '3x3', 'gap', 'layout'],
  },
  {
    c: 'bi-grid-3x3-gap-fill',
    t: ['grid', '3x3', 'gap', 'fill', 'layout'],
  },
  {
    c: 'bi-grid-fill',
    t: ['grid', 'fill', 'layout'],
  },
  {
    c: 'bi-grip-horizontal',
    t: ['grip', 'horizontal', 'drag', 'grab', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-grip-vertical',
    t: ['grip', 'vertical', 'drag', 'grab', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-hammer',
    t: ['hammer', 'tool', 'tools'],
  },
  {
    c: 'bi-hand-index',
    t: ['hand', 'index', 'pointer', 'cursor', 'hands'],
  },
  {
    c: 'bi-hand-index-fill',
    t: ['hand', 'index', 'fill', 'pointer', 'cursor', 'hands'],
  },
  {
    c: 'bi-hand-index-thumb',
    t: ['hand', 'index', 'thumb', 'pointer', 'cursor', 'hands'],
  },
  {
    c: 'bi-hand-index-thumb-fill',
    t: ['hand', 'index', 'thumb', 'fill', 'pointer', 'cursor', 'hands'],
  },
  {
    c: 'bi-hand-thumbs-down',
    t: ['hand', 'thumbs', 'down', 'pointer', 'thumbs-down', '-1', 'hands'],
  },
  {
    c: 'bi-hand-thumbs-down-fill',
    t: ['hand', 'thumbs', 'down', 'fill', 'pointer', 'thumbs-down', '-1', 'hands'],
  },
  {
    c: 'bi-hand-thumbs-up',
    t: ['hand', 'thumbs', 'up', 'pointer', 'thumbs-up', '+1', 'hands'],
  },
  {
    c: 'bi-hand-thumbs-up-fill',
    t: ['hand', 'thumbs', 'up', 'fill', 'pointer', 'thumbs-up', '+1', 'hands'],
  },
  {
    c: 'bi-handbag',
    t: ['handbag', 'purse', 'tote', 'real', 'world'],
  },
  {
    c: 'bi-handbag-fill',
    t: ['handbag', 'fill', 'purse', 'tote', 'real', 'world'],
  },
  {
    c: 'bi-hash',
    t: ['hash', 'text', 'type', 'typography'],
  },
  {
    c: 'bi-hdd',
    t: ['hdd', 'hard', 'drive', 'disk', 'ssd', 'server', 'devices'],
  },
  {
    c: 'bi-hdd-fill',
    t: ['hdd', 'fill', 'hard', 'drive', 'disk', 'ssd', 'server', 'devices'],
  },
  {
    c: 'bi-hdd-network',
    t: ['hdd', 'network', 'hard', 'drive', 'disk', 'ssd', 'server', 'devices'],
  },
  {
    c: 'bi-hdd-network-fill',
    t: ['hdd', 'network', 'fill', 'hard', 'drive', 'disk', 'ssd', 'server', 'devices'],
  },
  {
    c: 'bi-hdd-rack',
    t: ['hdd', 'rack', 'hard', 'drive', 'disk', 'ssd', 'server', 'devices'],
  },
  {
    c: 'bi-hdd-rack-fill',
    t: ['hdd', 'rack', 'fill', 'hard', 'drive', 'disk', 'ssd', 'server', 'devices'],
  },
  {
    c: 'bi-hdd-stack',
    t: ['hdd', 'stack', 'hard', 'drive', 'disk', 'ssd', 'server', 'devices'],
  },
  {
    c: 'bi-hdd-stack-fill',
    t: ['hdd', 'stack', 'fill', 'hard', 'drive', 'disk', 'ssd', 'server', 'devices'],
  },
  {
    c: 'bi-headphones',
    t: ['headphones', 'devices'],
  },
  {
    c: 'bi-headset',
    t: ['headset', 'headphones', 'microphone', 'devices'],
  },
  {
    c: 'bi-heart',
    t: ['heart', 'love', 'favorite', 'shapes'],
  },
  {
    c: 'bi-heart-fill',
    t: ['heart', 'fill', 'love', 'favorite', 'shapes'],
  },
  {
    c: 'bi-heart-half',
    t: ['heart', 'half', 'love', 'favorite', 'shapes'],
  },
  {
    c: 'bi-heptagon',
    t: ['heptagon', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-heptagon-fill',
    t: ['heptagon', 'fill', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-heptagon-half',
    t: ['heptagon', 'half', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-hexagon',
    t: ['hexagon', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-hexagon-fill',
    t: ['hexagon', 'fill', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-hexagon-half',
    t: ['hexagon', 'half', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-hourglass',
    t: ['hourglass', 'time', 'history', 'wait', 'sand', 'real', 'world'],
  },
  {
    c: 'bi-hourglass-bottom',
    t: ['hourglass', 'bottom', 'time', 'history', 'wait', 'sand', 'real', 'world'],
  },
  {
    c: 'bi-hourglass-split',
    t: ['hourglass', 'split', 'time', 'history', 'wait', 'sand', 'real', 'world'],
  },
  {
    c: 'bi-hourglass-top',
    t: ['hourglass', 'top', 'time', 'history', 'wait', 'sand', 'real', 'world'],
  },
  {
    c: 'bi-house',
    t: ['house', 'home', 'real', 'world'],
  },
  {
    c: 'bi-house-door',
    t: ['house', 'door', 'home', 'real', 'world'],
  },
  {
    c: 'bi-house-door-fill',
    t: ['house', 'door', 'fill', 'home', 'real', 'world'],
  },
  {
    c: 'bi-house-fill',
    t: ['house', 'fill', 'home', 'real', 'world'],
  },
  {
    c: 'bi-hr',
    t: ['hr', 'divider', 'horizonal-rule', 'typography'],
  },
  {
    c: 'bi-hurricane',
    t: ['hurricane', 'storm', 'weather'],
  },
  {
    c: 'bi-image',
    t: ['image', 'picture', 'photo', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-image-alt',
    t: ['image', 'alt', 'picture', 'photo', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-image-fill',
    t: ['image', 'fill', 'picture', 'photo', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-images',
    t: ['images', 'picture', 'photo', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-inbox',
    t: ['inbox', 'mail', 'email', 'communications'],
  },
  {
    c: 'bi-inbox-fill',
    t: ['inbox', 'fill', 'mail', 'email', 'communications'],
  },
  {
    c: 'bi-inboxes-fill',
    t: ['inboxes', 'fill', 'mail', 'email', 'communications'],
  },
  {
    c: 'bi-inboxes',
    t: ['inboxes', 'mail', 'email', 'communications'],
  },
  {
    c: 'bi-info',
    t: ['info', 'information', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-info-circle',
    t: ['info', 'circle', 'information', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-info-circle-fill',
    t: ['info', 'circle', 'fill', 'information', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-info-square',
    t: ['info', 'square', 'information', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-info-square-fill',
    t: ['info', 'square', 'fill', 'information', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-input-cursor',
    t: ['input', 'cursor', 'textarea', 'form', 'graphics'],
  },
  {
    c: 'bi-input-cursor-text',
    t: ['input', 'cursor', 'text', 'textarea', 'form', 'graphics'],
  },
  {
    c: 'bi-instagram',
    t: ['instagram', 'social'],
  },
  {
    c: 'bi-intersect',
    t: ['intersect', 'graphics', 'vector', 'merge', 'layers'],
  },
  {
    c: 'bi-journal',
    t: ['journal', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-album',
    t: ['journal', 'album', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-arrow-down',
    t: ['journal', 'arrow', 'down', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-arrow-up',
    t: ['journal', 'arrow', 'up', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-bookmark',
    t: ['journal', 'bookmark', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-bookmark-fill',
    t: ['journal', 'bookmark', 'fill', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-check',
    t: ['journal', 'check', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-code',
    t: ['journal', 'code', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-medical',
    t: ['journal', 'medical', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-minus',
    t: ['journal', 'minus', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-plus',
    t: ['journal', 'plus', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-richtext',
    t: ['journal', 'richtext', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-text',
    t: ['journal', 'text', 'file', 'folder', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journal-x',
    t: ['journal', 'x', 'file', 'folder', 'notebook', 'remove', 'delete', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-journals',
    t: ['journals', 'file', 'folder', 'journal', 'notebook', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-joystick',
    t: ['joystick', 'gaming', 'game', 'video', 'games', 'entertainment'],
  },
  {
    c: 'bi-justify',
    t: ['justify', 'text', 'type', 'alignment', 'typography'],
  },
  {
    c: 'bi-justify-left',
    t: ['justify', 'left', 'text', 'type', 'alignment', 'typography'],
  },
  {
    c: 'bi-justify-right',
    t: ['justify', 'right', 'text', 'type', 'alignment', 'typography'],
  },
  {
    c: 'bi-kanban',
    t: ['kanban', 'board', 'project-management', 'miscellaneous'],
  },
  {
    c: 'bi-kanban-fill',
    t: ['kanban', 'fill', 'board', 'project-management', 'miscellaneous'],
  },
  {
    c: 'bi-key',
    t: ['key', 'lock', 'secure', 'real', 'world'],
  },
  {
    c: 'bi-key-fill',
    t: ['key', 'fill', 'lock', 'secure', 'real', 'world'],
  },
  {
    c: 'bi-keyboard',
    t: ['keyboard', 'keys', 'typing', 'devices'],
  },
  {
    c: 'bi-keyboard-fill',
    t: ['keyboard', 'fill', 'keys', 'typing', 'devices'],
  },
  {
    c: 'bi-ladder',
    t: ['ladder', 'climb', 'real', 'world'],
  },
  {
    c: 'bi-lamp',
    t: ['lamp', 'light', 'real', 'world'],
  },
  {
    c: 'bi-lamp-fill',
    t: ['lamp', 'fill', 'light', 'real', 'world'],
  },
  {
    c: 'bi-laptop',
    t: ['laptop', 'computer', 'devices'],
  },
  {
    c: 'bi-laptop-fill',
    t: ['laptop', 'fill', 'computer', 'devices'],
  },
  {
    c: 'bi-layer-backward',
    t: ['layer', 'backward', 'arrange', 'layers', 'back', 'graphics'],
  },
  {
    c: 'bi-layer-forward',
    t: ['layer', 'forward', 'arrange', 'layers', 'front', 'graphics'],
  },
  {
    c: 'bi-layers',
    t: ['layers', 'perspective', 'stacked', 'graphics'],
  },
  {
    c: 'bi-layers-fill',
    t: ['layers', 'fill', 'perspective', 'stacked', 'graphics'],
  },
  {
    c: 'bi-layers-half',
    t: ['layers', 'half', 'perspective', 'stacked', 'graphics'],
  },
  {
    c: 'bi-layout-sidebar',
    t: ['layout', 'sidebar', 'grid'],
  },
  {
    c: 'bi-layout-sidebar-inset-reverse',
    t: ['layout', 'sidebar', 'inset', 'reverse', 'columns'],
  },
  {
    c: 'bi-layout-sidebar-inset',
    t: ['layout', 'sidebar', 'inset', 'columns'],
  },
  {
    c: 'bi-layout-sidebar-reverse',
    t: ['layout', 'sidebar', 'reverse', 'grid'],
  },
  {
    c: 'bi-layout-split',
    t: ['layout', 'split', 'grid', 'sidebar'],
  },
  {
    c: 'bi-layout-text-sidebar',
    t: ['layout', 'text', 'sidebar', 'columns'],
  },
  {
    c: 'bi-layout-text-sidebar-reverse',
    t: ['layout', 'text', 'sidebar', 'reverse', 'columns'],
  },
  {
    c: 'bi-layout-text-window',
    t: ['layout', 'text', 'window', 'columns'],
  },
  {
    c: 'bi-layout-text-window-reverse',
    t: ['layout', 'text', 'window', 'reverse', 'columns'],
  },
  {
    c: 'bi-layout-three-columns',
    t: ['layout', 'three', 'columns'],
  },
  {
    c: 'bi-layout-wtf',
    t: ['layout', 'wtf', 'broken'],
  },
  {
    c: 'bi-life-preserver',
    t: ['life', 'preserver', 'lifesaver', 'water', 'real', 'world'],
  },
  {
    c: 'bi-lightbulb',
    t: ['lightbulb', 'lights', 'real', 'world'],
  },
  {
    c: 'bi-lightbulb-fill',
    t: ['lightbulb', 'fill', 'lights', 'real', 'world'],
  },
  {
    c: 'bi-lightbulb-off',
    t: ['lightbulb', 'off', 'lights', 'real', 'world'],
  },
  {
    c: 'bi-lightbulb-off-fill',
    t: ['lightbulb', 'off', 'fill', 'lights', 'real', 'world'],
  },
  {
    c: 'bi-lightning',
    t: ['lightning', 'storm', 'thunder', 'bolt', 'weather'],
  },
  {
    c: 'bi-lightning-charge',
    t: ['lightning', 'charge', 'weather', 'storm', 'thunder', 'bolt', 'miscellaneous'],
  },
  {
    c: 'bi-lightning-charge-fill',
    t: ['lightning', 'charge', 'fill', 'weather', 'storm', 'thunder', 'bolt', 'miscellaneous'],
  },
  {
    c: 'bi-lightning-fill',
    t: ['lightning', 'fill', 'storm', 'thunder', 'bolt', 'weather'],
  },
  {
    c: 'bi-link',
    t: ['link', 'anchor', 'hyperlink', 'href', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-link-45deg',
    t: ['link', '45deg', 'anchor', 'hyperlink', 'href', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-linkedin',
    t: ['linkedin', 'social'],
  },
  {
    c: 'bi-list',
    t: ['list', 'text', 'type', 'justify', 'alignment', 'menu', 'hamburger', 'typography'],
  },
  {
    c: 'bi-list-check',
    t: ['list', 'check', 'text', 'type', 'justify', 'alignment', 'checklist', 'done', 'typography'],
  },
  {
    c: 'bi-list-nested',
    t: ['list', 'nested', 'text', 'type', 'alignment', 'children', 'typography'],
  },
  {
    c: 'bi-list-ol',
    t: ['list', 'ol', 'text', 'type', 'justify', 'alignment', 'ordered-list', 'numbered-list', 'numbered', 'typography'],
  },
  {
    c: 'bi-list-stars',
    t: ['list', 'stars', 'text', 'type', 'starred', 'typography'],
  },
  {
    c: 'bi-list-task',
    t: ['list', 'task', 'text', 'type', 'justify', 'alignment', 'todos', 'typography'],
  },
  {
    c: 'bi-list-ul',
    t: ['list', 'ul', 'text', 'type', 'justify', 'alignment', 'unordered-list', 'typography'],
  },
  {
    c: 'bi-lock',
    t: ['lock', 'privacy', 'security'],
  },
  {
    c: 'bi-lock-fill',
    t: ['lock', 'fill', 'privacy', 'security'],
  },
  {
    c: 'bi-mailbox',
    t: ['mailbox', 'post', 'postal', 'real', 'world'],
  },
  {
    c: 'bi-mailbox2',
    t: ['mailbox2', 'post', 'postal', 'real', 'world'],
  },
  {
    c: 'bi-map',
    t: ['map', 'geography', 'directions', 'location', 'geo'],
  },
  {
    c: 'bi-map-fill',
    t: ['map', 'fill', 'geography', 'directions', 'location', 'geo'],
  },
  {
    c: 'bi-markdown',
    t: ['markdown', 'md', 'content', 'writing', 'badges'],
  },
  {
    c: 'bi-markdown-fill',
    t: ['markdown', 'fill', 'md', 'content', 'writing', 'badges'],
  },
  {
    c: 'bi-mask',
    t: ['mask', 'graphics'],
  },
  {
    c: 'bi-megaphone',
    t: ['megaphone', 'loudspeaker', 'announcement', 'real', 'world'],
  },
  {
    c: 'bi-megaphone-fill',
    t: ['megaphone', 'fill', 'loudspeaker', 'announcement', 'real', 'world'],
  },
  {
    c: 'bi-menu-app',
    t: ['menu', 'app', 'dropdown', 'context', 'ui', 'controls'],
  },
  {
    c: 'bi-menu-app-fill',
    t: ['menu', 'app', 'fill', 'dropdown', 'context', 'ui', 'controls'],
  },
  {
    c: 'bi-menu-button',
    t: ['menu', 'button', 'dropdown', 'context', 'app', 'ui', 'controls'],
  },
  {
    c: 'bi-menu-button-fill',
    t: ['menu', 'button', 'fill', 'dropdown', 'context', 'app', 'ui', 'controls'],
  },
  {
    c: 'bi-menu-button-wide',
    t: ['menu', 'button', 'wide', 'dropdown', 'context', 'app', 'ui', 'controls'],
  },
  {
    c: 'bi-menu-button-wide-fill',
    t: ['menu', 'button', 'wide', 'fill', 'dropdown', 'context', 'app', 'ui', 'controls'],
  },
  {
    c: 'bi-menu-down',
    t: ['menu', 'down', 'dropdown', 'context', 'app', 'ui', 'controls'],
  },
  {
    c: 'bi-menu-up',
    t: ['menu', 'up', 'dropdown', 'context', 'app', 'ui', 'controls'],
  },
  {
    c: 'bi-mic',
    t: ['mic', 'audio', 'video', 'av', 'sound', 'input', 'microphone', 'media'],
  },
  {
    c: 'bi-mic-fill',
    t: ['mic', 'fill', 'audio', 'video', 'av', 'sound', 'input', 'microphone', 'media'],
  },
  {
    c: 'bi-mic-mute',
    t: ['mic', 'mute', 'audio', 'video', 'av', 'sound', 'input', 'microphone', 'media'],
  },
  {
    c: 'bi-mic-mute-fill',
    t: ['mic', 'mute', 'fill', 'audio', 'video', 'av', 'sound', 'input', 'microphone', 'media'],
  },
  {
    c: 'bi-minecart',
    t: ['minecart', 'mining', 'cart', 'real', 'world'],
  },
  {
    c: 'bi-minecart-loaded',
    t: ['minecart', 'loaded', 'mining', 'cart', 'real', 'world'],
  },
  {
    c: 'bi-moisture',
    t: ['moisture', 'water', 'droplets', 'weather'],
  },
  {
    c: 'bi-moon',
    t: ['moon', 'lunar', 'weather', 'night', 'real', 'world'],
  },
  {
    c: 'bi-moon-fill',
    t: ['moon', 'fill', 'night', 'sky', 'weather'],
  },
  {
    c: 'bi-moon-stars',
    t: ['moon', 'stars', 'night', 'sky', 'weather'],
  },
  {
    c: 'bi-moon-stars-fill',
    t: ['moon', 'stars', 'fill', 'night', 'sky', 'weather'],
  },
  {
    c: 'bi-mouse',
    t: ['mouse', 'mice', 'input', 'devices'],
  },
  {
    c: 'bi-mouse-fill',
    t: ['mouse', 'fill', 'mice', 'input', 'devices'],
  },
  {
    c: 'bi-mouse2',
    t: ['mouse2', 'mice', 'input', 'devices'],
  },
  {
    c: 'bi-mouse2-fill',
    t: ['mouse2', 'fill', 'mice', 'input', 'devices'],
  },
  {
    c: 'bi-mouse3',
    t: ['mouse3', 'mice', 'input', 'devices'],
  },
  {
    c: 'bi-mouse3-fill',
    t: ['mouse3', 'fill', 'mice', 'input', 'devices'],
  },
  {
    c: 'bi-music-note',
    t: ['music', 'note', 'notes', 'audio', 'sound', 'media'],
  },
  {
    c: 'bi-music-note-beamed',
    t: ['music', 'note', 'beamed', 'notes', 'audio', 'sound', 'media'],
  },
  {
    c: 'bi-music-note-list',
    t: ['music', 'note', 'list', 'notes', 'audio', 'sound', 'playlist', 'library', 'media'],
  },
  {
    c: 'bi-music-player',
    t: ['music', 'player', 'ipod', 'mp3', 'devices'],
  },
  {
    c: 'bi-music-player-fill',
    t: ['music', 'player', 'fill', 'ipod', 'mp3', 'devices'],
  },
  {
    c: 'bi-newspaper',
    t: ['newspaper', 'news', 'paper', 'real', 'world'],
  },
  {
    c: 'bi-node-minus',
    t: ['node', 'minus', 'add', 'new', 'diagram', 'graphics'],
  },
  {
    c: 'bi-node-minus-fill',
    t: ['node', 'minus', 'fill', 'add', 'new', 'diagram', 'graphics'],
  },
  {
    c: 'bi-node-plus',
    t: ['node', 'plus', 'add', 'new', 'diagram', 'graphics'],
  },
  {
    c: 'bi-node-plus-fill',
    t: ['node', 'plus', 'fill', 'add', 'new', 'diagram', 'graphics'],
  },
  {
    c: 'bi-nut',
    t: ['nut', 'bolt', 'hex', 'tools'],
  },
  {
    c: 'bi-nut-fill',
    t: ['nut', 'fill', 'bolt', 'hex', 'tools'],
  },
  {
    c: 'bi-octagon',
    t: ['octagon', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-octagon-fill',
    t: ['octagon', 'fill', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-octagon-half',
    t: ['octagon', 'half', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-option',
    t: ['option', 'key', 'mac', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-outlet',
    t: ['outlet', 'plug', 'power', 'real', 'world'],
  },
  {
    c: 'bi-paint-bucket',
    t: ['paint', 'bucket', 'color', 'fill', 'palette', 'graphics'],
  },
  {
    c: 'bi-palette',
    t: ['palette', 'color', 'paint', 'fill', 'graphics'],
  },
  {
    c: 'bi-palette-fill',
    t: ['palette', 'fill', 'color', 'paint', 'graphics'],
  },
  {
    c: 'bi-palette2',
    t: ['palette2', 'color', 'paint', 'fill', 'palette', 'graphics'],
  },
  {
    c: 'bi-paperclip',
    t: ['paperclip', 'attachment', 'real', 'world'],
  },
  {
    c: 'bi-paragraph',
    t: ['paragraph', 'text', 'body', 'content', 'typography'],
  },
  {
    c: 'bi-patch-check',
    t: ['patch', 'check', 'verified', 'checkmark', 'certified', 'badges'],
  },
  {
    c: 'bi-patch-check-fill',
    t: ['patch', 'check', 'fill', 'verified', 'checkmark', 'certified', 'badges'],
  },
  {
    c: 'bi-patch-exclamation',
    t: ['patch', 'exclamation', 'excited', 'certified', 'badges'],
  },
  {
    c: 'bi-patch-exclamation-fill',
    t: ['patch', 'exclamation', 'fill', 'excited', 'certified', 'badges'],
  },
  {
    c: 'bi-patch-minus',
    t: ['patch', 'minus', 'badges'],
  },
  {
    c: 'bi-patch-minus-fill',
    t: ['patch', 'minus', 'fill', 'badges'],
  },
  {
    c: 'bi-patch-plus',
    t: ['patch', 'plus', 'badges'],
  },
  {
    c: 'bi-patch-plus-fill',
    t: ['patch', 'plus', 'fill', 'badges'],
  },
  {
    c: 'bi-patch-question',
    t: ['patch', 'question', 'badges'],
  },
  {
    c: 'bi-patch-question-fill',
    t: ['patch', 'question', 'fill', 'badges'],
  },
  {
    c: 'bi-pause',
    t: ['pause', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-pause-btn',
    t: ['pause', 'btn', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-pause-btn-fill',
    t: ['pause', 'btn', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-pause-circle',
    t: ['pause', 'circle', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-pause-circle-fill',
    t: ['pause', 'circle', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-pause-fill',
    t: ['pause', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-peace',
    t: ['peace', 'love', 'miscellaneous'],
  },
  {
    c: 'bi-peace-fill',
    t: ['peace', 'fill', 'love', 'miscellaneous'],
  },
  {
    c: 'bi-pen',
    t: ['pen', 'edit', 'write', 'ballpoint', 'tools'],
  },
  {
    c: 'bi-pen-fill',
    t: ['pen', 'fill', 'edit', 'write', 'ballpoint', 'tools'],
  },
  {
    c: 'bi-pencil',
    t: ['pencil', 'edit', 'write', 'tools'],
  },
  {
    c: 'bi-pencil-fill',
    t: ['pencil', 'fill', 'edit', 'write', 'tools'],
  },
  {
    c: 'bi-pencil-square',
    t: ['pencil', 'square', 'edit', 'write', 'tools'],
  },
  {
    c: 'bi-pentagon',
    t: ['pentagon', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-pentagon-fill',
    t: ['pentagon', 'fill', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-pentagon-half',
    t: ['pentagon', 'half', 'shape', 'polygon', 'shapes'],
  },
  {
    c: 'bi-people',
    t: ['people', 'humans', 'organization', 'avatar', 'users'],
  },
  {
    c: 'bi-person-circle',
    t: ['person', 'circle', 'humans', 'organization', 'avatar', 'user', 'people'],
  },
  {
    c: 'bi-people-fill',
    t: ['people', 'fill', 'humans', 'organization', 'avatar', 'users'],
  },
  {
    c: 'bi-percent',
    t: ['percent', 'percentage', 'math', 'fraction', 'typography'],
  },
  {
    c: 'bi-person',
    t: ['person', 'human', 'individual', 'avatar', 'user', 'people'],
  },
  {
    c: 'bi-person-badge',
    t: ['person', 'badge', 'human', 'individual', 'avatar', 'user', 'id', 'card', 'people'],
  },
  {
    c: 'bi-person-badge-fill',
    t: ['person', 'badge', 'fill', 'human', 'individual', 'avatar', 'user', 'id', 'card', 'people'],
  },
  {
    c: 'bi-person-bounding-box',
    t: ['person', 'bounding', 'box', 'human', 'individual', 'avatar', 'user', 'crop', 'people'],
  },
  {
    c: 'bi-person-check',
    t: ['person', 'check', 'human', 'individual', 'avatar', 'user', 'verified', 'people'],
  },
  {
    c: 'bi-person-check-fill',
    t: ['person', 'check', 'fill', 'human', 'individual', 'avatar', 'user', 'verified', 'people'],
  },
  {
    c: 'bi-person-dash',
    t: ['person', 'dash', 'human', 'individual', 'avatar', 'user', 'remove', 'delete', 'people'],
  },
  {
    c: 'bi-person-dash-fill',
    t: ['person', 'dash', 'fill', 'human', 'individual', 'avatar', 'user', 'remove', 'delete', 'people'],
  },
  {
    c: 'bi-person-fill',
    t: ['person', 'fill', 'human', 'individual', 'avatar', 'user', 'people'],
  },
  {
    c: 'bi-person-lines-fill',
    t: ['person', 'lines', 'fill', 'human', 'individual', 'avatar', 'user', 'contact', 'list', 'people'],
  },
  {
    c: 'bi-person-plus',
    t: ['person', 'plus', 'human', 'individual', 'avatar', 'user', 'new', 'add', 'people'],
  },
  {
    c: 'bi-person-plus-fill',
    t: ['person', 'plus', 'fill', 'human', 'individual', 'avatar', 'user', 'new', 'add', 'people'],
  },
  {
    c: 'bi-person-square',
    t: ['person', 'square', 'human', 'individual', 'avatar', 'user', 'people'],
  },
  {
    c: 'bi-person-x',
    t: ['person', 'x', 'human', 'individual', 'avatar', 'user', 'remove', 'delete', 'people'],
  },
  {
    c: 'bi-person-x-fill',
    t: ['person', 'x', 'fill', 'human', 'individual', 'avatar', 'user', 'remove', 'delete', 'people'],
  },
  {
    c: 'bi-phone',
    t: ['phone', 'mobile', 'telephone', 'devices'],
  },
  {
    c: 'bi-phone-fill',
    t: ['phone', 'fill', 'mobile', 'telephone', 'devices'],
  },
  {
    c: 'bi-phone-landscape',
    t: ['phone', 'landscape', 'mobile', 'telephone', 'devices'],
  },
  {
    c: 'bi-phone-landscape-fill',
    t: ['phone', 'landscape', 'fill', 'mobile', 'telephone', 'devices'],
  },
  {
    c: 'bi-phone-vibrate',
    t: ['phone', 'vibrate', 'mobile', 'telephone', 'haptic', 'devices'],
  },
  {
    c: 'bi-phone-vibrate-fill',
    t: ['phone', 'vibrate', 'fill', 'mobile', 'telephone', 'haptic', 'devices'],
  },
  {
    c: 'bi-pie-chart',
    t: ['pie', 'chart', 'graph', 'analytics', 'data'],
  },
  {
    c: 'bi-pie-chart-fill',
    t: ['pie', 'chart', 'fill', 'graph', 'analytics', 'data'],
  },
  {
    c: 'bi-pin',
    t: ['pin', 'pushpin', 'thumbtack', 'real', 'world'],
  },
  {
    c: 'bi-pin-angle',
    t: ['pin', 'angle', 'pushpin', 'thumbtack', 'real', 'world'],
  },
  {
    c: 'bi-pin-angle-fill',
    t: ['pin', 'angle', 'fill', 'pushpin', 'thumbtack', 'real', 'world'],
  },
  {
    c: 'bi-pin-fill',
    t: ['pin', 'fill', 'pushpin', 'thumbtack', 'real', 'world'],
  },
  {
    c: 'bi-pip',
    t: ['pip', 'picture', 'tv', 'television', 'display', 'nested', 'media'],
  },
  {
    c: 'bi-pip-fill',
    t: ['pip', 'fill', 'picture', 'tv', 'television', 'display', 'nested', 'media'],
  },
  {
    c: 'bi-play',
    t: ['play', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-play-btn',
    t: ['play', 'btn', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-play-btn-fill',
    t: ['play', 'btn', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-play-circle',
    t: ['play', 'circle', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-play-circle-fill',
    t: ['play', 'circle', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-play-fill',
    t: ['play', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-plug',
    t: ['plug', 'power', 'outlet', 'real', 'world'],
  },
  {
    c: 'bi-plug-fill',
    t: ['plug', 'fill', 'power', 'outlet', 'real', 'world'],
  },
  {
    c: 'bi-plus',
    t: ['plus', 'add', 'new', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-plus-circle',
    t: ['plus', 'circle', 'add', 'new', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-plus-circle-dotted',
    t: ['plus', 'circle', 'dotted', 'add', 'new', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-plus-circle-fill',
    t: ['plus', 'circle', 'fill', 'add', 'new', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-plus-square',
    t: ['plus', 'square', 'add', 'new', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-plus-square-dotted',
    t: ['plus', 'square', 'dotted', 'add', 'new', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-plus-square-fill',
    t: ['plus', 'square', 'fill', 'add', 'new', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-power',
    t: ['power', 'false', 'true', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-printer',
    t: ['printer', 'print', 'devices'],
  },
  {
    c: 'bi-printer-fill',
    t: ['printer', 'fill', 'print', 'devices'],
  },
  {
    c: 'bi-puzzle',
    t: ['puzzle', 'piece', 'miscellaneous'],
  },
  {
    c: 'bi-puzzle-fill',
    t: ['puzzle', 'fill', 'piece', 'miscellaneous'],
  },
  {
    c: 'bi-question',
    t: ['question', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-question-circle',
    t: ['question', 'circle', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-question-diamond',
    t: ['question', 'diamond', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-question-diamond-fill',
    t: ['question', 'diamond', 'fill', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-question-circle-fill',
    t: ['question', 'circle', 'fill', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-question-octagon',
    t: ['question', 'octagon', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-question-octagon-fill',
    t: ['question', 'octagon', 'fill', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-question-square',
    t: ['question', 'square', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-question-square-fill',
    t: ['question', 'square', 'fill', 'help', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-rainbow',
    t: ['rainbow', 'colors', 'arches', 'weather'],
  },
  {
    c: 'bi-receipt',
    t: ['receipt', 'invoice', 'sale', 'purchase', 'commerce'],
  },
  {
    c: 'bi-receipt-cutoff',
    t: ['receipt', 'cutoff', 'invoice', 'sale', 'purchase', 'commerce'],
  },
  {
    c: 'bi-reception-0',
    t: ['reception', '0', 'cellphone', 'mobile', 'carrier', 'network', 'communications'],
  },
  {
    c: 'bi-reception-1',
    t: ['reception', '1', 'cellphone', 'mobile', 'carrier', 'network', 'communications'],
  },
  {
    c: 'bi-reception-2',
    t: ['reception', '2', 'cellphone', 'mobile', 'carrier', 'network', 'communications'],
  },
  {
    c: 'bi-reception-3',
    t: ['reception', '3', 'cellphone', 'mobile', 'carrier', 'network', 'communications'],
  },
  {
    c: 'bi-reception-4',
    t: ['reception', '4', 'cellphone', 'mobile', 'carrier', 'network', 'communications'],
  },
  {
    c: 'bi-record',
    t: ['record', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-record-btn',
    t: ['record', 'btn', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-record-btn-fill',
    t: ['record', 'btn', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-record-circle',
    t: ['record', 'circle', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-record-circle-fill',
    t: ['record', 'circle', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-record-fill',
    t: ['record', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-record2',
    t: ['record2', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-record2-fill',
    t: ['record2', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-reply',
    t: ['reply', 'mail', 'email', 'communications'],
  },
  {
    c: 'bi-reply-all',
    t: ['reply', 'all', 'mail', 'email', 'communications'],
  },
  {
    c: 'bi-reply-all-fill',
    t: ['reply', 'all', 'fill', 'mail', 'email', 'communications'],
  },
  {
    c: 'bi-reply-fill',
    t: ['reply', 'fill', 'mail', 'email', 'communications'],
  },
  {
    c: 'bi-rss',
    t: ['rss', 'atom', 'feed', 'xml', 'communications'],
  },
  {
    c: 'bi-rss-fill',
    t: ['rss', 'fill', 'atom', 'feed', 'xml', 'communications'],
  },
  {
    c: 'bi-rulers',
    t: ['rulers', 'measure', 'guide', 'graphics'],
  },
  {
    c: 'bi-save',
    t: ['save', 'floppy', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-save-fill',
    t: ['save', 'fill', 'floppy', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-save2',
    t: ['save2', 'save', 'floppy', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-save2-fill',
    t: ['save2', 'fill', 'save', 'floppy', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-scissors',
    t: ['scissors', 'cut', 'shears', 'real', 'world'],
  },
  {
    c: 'bi-screwdriver',
    t: ['screwdriver', 'tool', 'tools'],
  },
  {
    c: 'bi-search',
    t: ['search', 'magnifying-glass', 'look', 'communications'],
  },
  {
    c: 'bi-segmented-nav',
    t: ['segmented', 'nav', 'tabs', 'tabbed', 'app', 'ui', 'controls'],
  },
  {
    c: 'bi-server',
    t: ['server', 'network', 'devices'],
  },
  {
    c: 'bi-share',
    t: ['share', 'link', 'communications'],
  },
  {
    c: 'bi-share-fill',
    t: ['share', 'fill', 'link', 'communications'],
  },
  {
    c: 'bi-shield',
    t: ['shield', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-check',
    t: ['shield', 'check', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-exclamation',
    t: ['shield', 'exclamation', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-fill',
    t: ['shield', 'fill', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-fill-check',
    t: ['shield', 'fill', 'check', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-fill-exclamation',
    t: ['shield', 'fill', 'exclamation', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-fill-minus',
    t: ['shield', 'fill', 'minus', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-fill-plus',
    t: ['shield', 'fill', 'plus', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-fill-x',
    t: ['shield', 'fill', 'x', 'privacy', 'security', 'remove', 'delete'],
  },
  {
    c: 'bi-shield-lock',
    t: ['shield', 'lock', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-lock-fill',
    t: ['shield', 'lock', 'fill', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-minus',
    t: ['shield', 'minus', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-plus',
    t: ['shield', 'plus', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-shaded',
    t: ['shield', 'shaded', 'privacy', 'security'],
  },
  {
    c: 'bi-shield-slash',
    t: ['shield', 'slash', 'badge', 'security'],
  },
  {
    c: 'bi-shield-slash-fill',
    t: ['shield', 'slash', 'fill', 'badge', 'security'],
  },
  {
    c: 'bi-shield-x',
    t: ['shield', 'x', 'privacy', 'security', 'remove', 'delete'],
  },
  {
    c: 'bi-shift',
    t: ['shift', 'key', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-shift-fill',
    t: ['shift', 'fill', 'key', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-shop',
    t: ['shop', 'store', 'market', 'marketplace', 'shopping', 'retail', 'commerce'],
  },
  {
    c: 'bi-shop-window',
    t: ['shop', 'window', 'store', 'market', 'marketplace', 'shopping', 'retail', 'commerce'],
  },
  {
    c: 'bi-shuffle',
    t: ['shuffle', 'random', 'arrows'],
  },
  {
    c: 'bi-signpost',
    t: ['signpost', 'milestone', 'sign', 'road', 'street', 'directions', 'real', 'world'],
  },
  {
    c: 'bi-signpost-2',
    t: ['signpost', '2', 'milestone', 'sign', 'road', 'street', 'directions', 'real', 'world'],
  },
  {
    c: 'bi-signpost-2-fill',
    t: ['signpost', '2', 'fill', 'milestone', 'sign', 'road', 'street', 'directions', 'real', 'world'],
  },
  {
    c: 'bi-signpost-fill',
    t: ['signpost', 'fill', 'milestone', 'sign', 'road', 'street', 'directions', 'real', 'world'],
  },
  {
    c: 'bi-signpost-split',
    t: ['signpost', 'split', 'milestone', 'sign', 'road', 'street', 'directions', 'real', 'world'],
  },
  {
    c: 'bi-signpost-split-fill',
    t: ['signpost', 'split', 'fill', 'milestone', 'sign', 'road', 'street', 'directions', 'real', 'world'],
  },
  {
    c: 'bi-sim',
    t: ['sim', 'mobile', 'carrier', 'devices'],
  },
  {
    c: 'bi-sim-fill',
    t: ['sim', 'fill', 'mobile', 'carrier', 'devices'],
  },
  {
    c: 'bi-skip-backward',
    t: ['skip', 'backward', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-backward-btn',
    t: ['skip', 'backward', 'btn', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-backward-btn-fill',
    t: ['skip', 'backward', 'btn', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-backward-circle',
    t: ['skip', 'backward', 'circle', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-backward-circle-fill',
    t: ['skip', 'backward', 'circle', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-backward-fill',
    t: ['skip', 'backward', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-end',
    t: ['skip', 'end', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-end-btn',
    t: ['skip', 'end', 'btn', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-end-btn-fill',
    t: ['skip', 'end', 'btn', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-end-circle',
    t: ['skip', 'end', 'circle', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-end-circle-fill',
    t: ['skip', 'end', 'circle', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-end-fill',
    t: ['skip', 'end', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-forward',
    t: ['skip', 'forward', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-forward-btn',
    t: ['skip', 'forward', 'btn', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-forward-btn-fill',
    t: ['skip', 'forward', 'btn', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-forward-circle',
    t: ['skip', 'forward', 'circle', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-forward-circle-fill',
    t: ['skip', 'forward', 'circle', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-forward-fill',
    t: ['skip', 'forward', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-start',
    t: ['skip', 'start', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-start-btn',
    t: ['skip', 'start', 'btn', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-start-btn-fill',
    t: ['skip', 'start', 'btn', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-start-circle',
    t: ['skip', 'start', 'circle', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-start-circle-fill',
    t: ['skip', 'start', 'circle', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-skip-start-fill',
    t: ['skip', 'start', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-slack',
    t: ['slack', 'social'],
  },
  {
    c: 'bi-slash',
    t: ['slash', 'shape', 'stop', 'ban', 'false', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-slash-circle-fill',
    t: ['slash', 'circle', 'fill', 'shape', 'stop', 'ban', 'false', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-slash-square',
    t: ['slash', 'square', 'shape', 'stop', 'ban', 'false', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-slash-square-fill',
    t: ['slash', 'square', 'fill', 'shape', 'stop', 'ban', 'false', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-sliders',
    t: ['sliders', 'equalizer', 'settings', 'preferences', 'dials', 'graphics'],
  },
  {
    c: 'bi-smartwatch',
    t: ['smartwatch', 'watch', 'wearables', 'devices'],
  },
  {
    c: 'bi-snow',
    t: ['snow', 'blizzard', 'flurries', 'weather'],
  },
  {
    c: 'bi-snow2',
    t: ['snow2', 'blizzard', 'flurries', 'weather'],
  },
  {
    c: 'bi-snow3',
    t: ['snow3', 'blizzard', 'flurries', 'weather'],
  },
  {
    c: 'bi-sort-alpha-down',
    t: ['sort', 'alpha', 'down', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-alpha-down-alt',
    t: ['sort', 'alpha', 'down', 'alt', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-alpha-up',
    t: ['sort', 'alpha', 'up', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-alpha-up-alt',
    t: ['sort', 'alpha', 'up', 'alt', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-down',
    t: ['sort', 'down', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-down-alt',
    t: ['sort', 'down', 'alt', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-numeric-down',
    t: ['sort', 'numeric', 'down', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-numeric-down-alt',
    t: ['sort', 'numeric', 'down', 'alt', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-numeric-up',
    t: ['sort', 'numeric', 'up', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-numeric-up-alt',
    t: ['sort', 'numeric', 'up', 'alt', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-up',
    t: ['sort', 'up', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-sort-up-alt',
    t: ['sort', 'up', 'alt', 'filter', 'organize', 'and'],
  },
  {
    c: 'bi-soundwave',
    t: ['soundwave', 'audio', 'sound', 'wave', 'media'],
  },
  {
    c: 'bi-speaker',
    t: ['speaker', 'audio', 'sound', 'devices'],
  },
  {
    c: 'bi-speaker-fill',
    t: ['speaker', 'fill', 'audio', 'sound', 'devices'],
  },
  {
    c: 'bi-speedometer',
    t: ['speedometer', 'speed', 'tachometer', 'dashboard', 'real', 'world'],
  },
  {
    c: 'bi-speedometer2',
    t: ['speedometer2', 'speed', 'tachometer', 'dashboard', 'real', 'world'],
  },
  {
    c: 'bi-spellcheck',
    t: ['spellcheck', 'spelling', 'grammar', 'typography'],
  },
  {
    c: 'bi-square',
    t: ['square', 'shape', 'rectangle', 'shapes'],
  },
  {
    c: 'bi-square-fill',
    t: ['square', 'fill', 'shape', 'rectangle', 'shapes'],
  },
  {
    c: 'bi-square-half',
    t: ['square', 'half', 'shape', 'rectangle', 'shapes'],
  },
  {
    c: 'bi-stack',
    t: ['stack', 'layers', 'graphics'],
  },
  {
    c: 'bi-star',
    t: ['star', 'shape', 'like', 'favorite', 'shapes'],
  },
  {
    c: 'bi-star-fill',
    t: ['star', 'fill', 'shape', 'like', 'favorite', 'shapes'],
  },
  {
    c: 'bi-star-half',
    t: ['star', 'half', 'shape', 'like', 'favorite', 'shapes'],
  },
  {
    c: 'bi-stars',
    t: ['stars', 'clear', 'skies', 'night', 'weather'],
  },
  {
    c: 'bi-stickies',
    t: ['stickies', 'postit', 'note', 'sticky', 'real', 'world'],
  },
  {
    c: 'bi-stickies-fill',
    t: ['stickies', 'fill', 'postit', 'note', 'sticky', 'real', 'world'],
  },
  {
    c: 'bi-sticky',
    t: ['sticky', 'postit', 'note', 'real', 'world'],
  },
  {
    c: 'bi-sticky-fill',
    t: ['sticky', 'fill', 'postit', 'note', 'real', 'world'],
  },
  {
    c: 'bi-stop',
    t: ['stop', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-stop-btn',
    t: ['stop', 'btn', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-stop-btn-fill',
    t: ['stop', 'btn', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-stop-circle',
    t: ['stop', 'circle', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-stop-circle-fill',
    t: ['stop', 'circle', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-stop-fill',
    t: ['stop', 'fill', 'audio', 'video', 'av', 'media'],
  },
  {
    c: 'bi-stoplights',
    t: ['stoplights', 'traffic', 'lights', 'intersection', 'real', 'world'],
  },
  {
    c: 'bi-stoplights-fill',
    t: ['stoplights', 'fill', 'traffic', 'lights', 'intersection', 'real', 'world'],
  },
  {
    c: 'bi-stopwatch',
    t: ['stopwatch', 'time', 'timer', 'devices'],
  },
  {
    c: 'bi-stopwatch-fill',
    t: ['stopwatch', 'fill', 'time', 'timer', 'devices'],
  },
  {
    c: 'bi-subtract',
    t: ['subtract', 'graphics', 'vector', 'merge', 'layers'],
  },
  {
    c: 'bi-suit-club',
    t: ['suit', 'club', 'card', 'cards', 'deck', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-suit-club-fill',
    t: ['suit', 'club', 'fill', 'card', 'cards', 'deck', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-suit-diamond',
    t: ['suit', 'diamond', 'card', 'cards', 'deck', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-suit-diamond-fill',
    t: ['suit', 'diamond', 'fill', 'card', 'cards', 'deck', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-suit-heart',
    t: ['suit', 'heart', 'card', 'cards', 'deck', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-suit-heart-fill',
    t: ['suit', 'heart', 'fill', 'card', 'cards', 'deck', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-suit-spade',
    t: ['suit', 'spade', 'card', 'cards', 'deck', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-suit-spade-fill',
    t: ['suit', 'spade', 'fill', 'card', 'cards', 'deck', 'gambling', 'entertainment'],
  },
  {
    c: 'bi-sun',
    t: ['sun', 'solar', 'weather'],
  },
  {
    c: 'bi-sun-fill',
    t: ['sun', 'fill', 'solar', 'weather'],
  },
  {
    c: 'bi-sunglasses',
    t: ['sunglasses', 'shades', 'cool', 'aviators', 'real', 'world'],
  },
  {
    c: 'bi-sunrise',
    t: ['sunrise', 'dawn', 'weather'],
  },
  {
    c: 'bi-sunrise-fill',
    t: ['sunrise', 'fill', 'dawn', 'weather'],
  },
  {
    c: 'bi-sunset',
    t: ['sunset', 'dusk', 'weather'],
  },
  {
    c: 'bi-sunset-fill',
    t: ['sunset', 'fill', 'dusk', 'weather'],
  },
  {
    c: 'bi-symmetry-horizontal',
    t: ['symmetry', 'horizontal', 'align', 'orientation', 'mirror', 'graphics'],
  },
  {
    c: 'bi-symmetry-vertical',
    t: ['symmetry', 'vertical', 'align', 'orientation', 'mirror', 'graphics'],
  },
  {
    c: 'bi-table',
    t: ['table', 'spreadsheet', 'files', 'and', 'folders'],
  },
  {
    c: 'bi-tablet',
    t: ['tablet', 'mobile', 'devices'],
  },
  {
    c: 'bi-tablet-fill',
    t: ['tablet', 'fill', 'mobile', 'devices'],
  },
  {
    c: 'bi-tablet-landscape',
    t: ['tablet', 'landscape', 'mobile', 'devices'],
  },
  {
    c: 'bi-tablet-landscape-fill',
    t: ['tablet', 'landscape', 'fill', 'mobile', 'devices'],
  },
  {
    c: 'bi-tag',
    t: ['tag', 'price', 'category', 'taxonomy', 'label', 'real', 'world'],
  },
  {
    c: 'bi-tag-fill',
    t: ['tag', 'fill', 'price', 'category', 'taxonomy', 'label', 'real', 'world'],
  },
  {
    c: 'bi-tags',
    t: ['tags', 'price', 'category', 'taxonomy', 'label', 'real', 'world'],
  },
  {
    c: 'bi-tags-fill',
    t: ['tags', 'fill', 'price', 'category', 'taxonomy', 'label', 'real', 'world'],
  },
  {
    c: 'bi-telegram',
    t: ['telegram', 'social'],
  },
  {
    c: 'bi-telephone',
    t: ['telephone', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-fill',
    t: ['telephone', 'fill', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-forward',
    t: ['telephone', 'forward', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-forward-fill',
    t: ['telephone', 'forward', 'fill', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-inbound',
    t: ['telephone', 'inbound', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-inbound-fill',
    t: ['telephone', 'inbound', 'fill', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-minus',
    t: ['telephone', 'minus', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-minus-fill',
    t: ['telephone', 'minus', 'fill', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-outbound',
    t: ['telephone', 'outbound', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-outbound-fill',
    t: ['telephone', 'outbound', 'fill', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-plus',
    t: ['telephone', 'plus', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-plus-fill',
    t: ['telephone', 'plus', 'fill', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-x',
    t: ['telephone', 'x', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-telephone-x-fill',
    t: ['telephone', 'x', 'fill', 'phone', 'call', 'communications'],
  },
  {
    c: 'bi-terminal',
    t: ['terminal', 'command-line', 'cli', 'command-prompt', 'apps'],
  },
  {
    c: 'bi-terminal-fill',
    t: ['terminal', 'fill', 'command-line', 'cli', 'command-prompt', 'apps'],
  },
  {
    c: 'bi-text-center',
    t: ['text', 'center', 'type', 'justify', 'alignment', 'typography'],
  },
  {
    c: 'bi-text-indent-left',
    t: ['text', 'indent', 'left', 'type', 'justify', 'alignment', 'typography'],
  },
  {
    c: 'bi-text-indent-right',
    t: ['text', 'indent', 'right', 'type', 'justify', 'alignment', 'typography'],
  },
  {
    c: 'bi-text-left',
    t: ['text', 'left', 'type', 'justify', 'alignment', 'typography'],
  },
  {
    c: 'bi-text-paragraph',
    t: ['text', 'paragraph', 'type', 'copy', 'typography'],
  },
  {
    c: 'bi-text-right',
    t: ['text', 'right', 'type', 'justify', 'alignment', 'typography'],
  },
  {
    c: 'bi-textarea',
    t: ['textarea', 'text', 'insert', 'bounding-box', 'graphics'],
  },
  {
    c: 'bi-textarea-resize',
    t: ['textarea', 'resize', 'text', 'form', 'graphics'],
  },
  {
    c: 'bi-textarea-t',
    t: ['textarea', 't', 'text', 'insert', 'bounding-box', 'graphics'],
  },
  {
    c: 'bi-thermometer',
    t: ['thermometer', 'temperature', 'weather', 'real', 'world'],
  },
  {
    c: 'bi-thermometer-half',
    t: ['thermometer', 'half', 'temperature', 'weather'],
  },
  {
    c: 'bi-thermometer-high',
    t: ['thermometer', 'high', 'temperature', 'weather'],
  },
  {
    c: 'bi-thermometer-low',
    t: ['thermometer', 'low', 'temperature', 'weather'],
  },
  {
    c: 'bi-thermometer-snow',
    t: ['thermometer', 'snow', 'temperature', 'weather'],
  },
  {
    c: 'bi-thermometer-sun',
    t: ['thermometer', 'sun', 'temperature', 'weather'],
  },
  {
    c: 'bi-three-dots',
    t: ['three', 'dots', 'meatballs', 'more', 'ellipsis', 'overflow', 'menu', 'controls'],
  },
  {
    c: 'bi-three-dots-vertical',
    t: ['three', 'dots', 'vertical', 'kebab', 'more', 'ellipsis', 'overflow', 'menu', 'controls'],
  },
  {
    c: 'bi-toggle-off',
    t: ['toggle', 'off', 'switch', 'controls'],
  },
  {
    c: 'bi-toggle-on',
    t: ['toggle', 'on', 'switch', 'controls'],
  },
  {
    c: 'bi-toggle2-off',
    t: ['toggle2', 'off', 'toggle', 'switch', 'controls'],
  },
  {
    c: 'bi-toggle2-on',
    t: ['toggle2', 'on', 'toggle', 'switch', 'controls'],
  },
  {
    c: 'bi-toggles',
    t: ['toggles', 'toggle', 'switch', 'controls'],
  },
  {
    c: 'bi-toggles2',
    t: ['toggles2', 'toggle', 'switch', 'controls'],
  },
  {
    c: 'bi-tools',
    t: ['tools', 'tool', 'wrench', 'screwdriver'],
  },
  {
    c: 'bi-tornado',
    t: ['tornado', 'wind', 'weather'],
  },
  {
    c: 'bi-trash',
    t: ['trash', 'trash-can', 'garbage', 'delete', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-trash-fill',
    t: ['trash', 'fill', 'trash-can', 'garbage', 'delete', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-trash2',
    t: ['trash2', 'trash-can', 'garbage', 'delete', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-trash2-fill',
    t: ['trash2', 'fill', 'trash-can', 'garbage', 'delete', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-tree',
    t: ['tree', 'forrest', 'real', 'world'],
  },
  {
    c: 'bi-tree-fill',
    t: ['tree', 'fill', 'forrest', 'real', 'world'],
  },
  {
    c: 'bi-triangle',
    t: ['triangle', 'shape', 'shapes'],
  },
  {
    c: 'bi-triangle-fill',
    t: ['triangle', 'fill', 'shape', 'shapes'],
  },
  {
    c: 'bi-triangle-half',
    t: ['triangle', 'half', 'shape', 'shapes'],
  },
  {
    c: 'bi-trophy',
    t: ['trophy', 'prize', 'winning', 'real', 'world'],
  },
  {
    c: 'bi-trophy-fill',
    t: ['trophy', 'fill', 'prize', 'winning', 'real', 'world'],
  },
  {
    c: 'bi-tropical-storm',
    t: ['tropical', 'storm', 'hurricane', 'weather'],
  },
  {
    c: 'bi-truck',
    t: ['truck', 'trucking', 'shipping', 'shipment', 'transport', 'deliver', 'delivery', 'commerce'],
  },
  {
    c: 'bi-truck-flatbed',
    t: ['truck', 'flatbed', 'trucking', 'shipping', 'shipment', 'transport', 'deliver', 'delivery', 'commerce'],
  },
  {
    c: 'bi-tsunami',
    t: ['tsunami', 'wave', 'weather'],
  },
  {
    c: 'bi-tv',
    t: ['tv', 'television', 'monitor', 'display', 'devices'],
  },
  {
    c: 'bi-tv-fill',
    t: ['tv', 'fill', 'television', 'monitor', 'display', 'devices'],
  },
  {
    c: 'bi-twitch',
    t: ['twitch', 'social'],
  },
  {
    c: 'bi-twitter',
    t: ['twitter', 'social'],
  },
  {
    c: 'bi-type',
    t: ['type', 'text', 'typography'],
  },
  {
    c: 'bi-type-bold',
    t: ['type', 'bold', 'text', 'typography'],
  },
  {
    c: 'bi-type-h1',
    t: ['type', 'h1', 'text', 'heading', 'typography'],
  },
  {
    c: 'bi-type-h2',
    t: ['type', 'h2', 'text', 'heading', 'typography'],
  },
  {
    c: 'bi-type-h3',
    t: ['type', 'h3', 'text', 'heading', 'typography'],
  },
  {
    c: 'bi-type-italic',
    t: ['type', 'italic', 'text', 'typography'],
  },
  {
    c: 'bi-type-strikethrough',
    t: ['type', 'strikethrough', 'text', 'typography'],
  },
  {
    c: 'bi-type-underline',
    t: ['type', 'underline', 'text', 'typography'],
  },
  {
    c: 'bi-ui-checks',
    t: ['ui', 'checks', 'checkbox', 'form', 'controls'],
  },
  {
    c: 'bi-ui-checks-grid',
    t: ['ui', 'checks', 'grid', 'checkbox', 'form', 'controls'],
  },
  {
    c: 'bi-ui-radios',
    t: ['ui', 'radios', 'radio', 'form', 'controls'],
  },
  {
    c: 'bi-ui-radios-grid',
    t: ['ui', 'radios', 'grid', 'radio', 'form', 'controls'],
  },
  {
    c: 'bi-umbrella',
    t: ['umbrella', 'rain', 'weather'],
  },
  {
    c: 'bi-umbrella-fill',
    t: ['umbrella', 'fill', 'rain', 'weather'],
  },
  {
    c: 'bi-union',
    t: ['union', 'graphics', 'vector', 'merge', 'layers'],
  },
  {
    c: 'bi-unlock',
    t: ['unlock', 'privacy', 'security'],
  },
  {
    c: 'bi-unlock-fill',
    t: ['unlock', 'fill', 'privacy', 'security'],
  },
  {
    c: 'bi-upc',
    t: ['upc', 'purchase', 'barcode', 'commerce'],
  },
  {
    c: 'bi-upc-scan',
    t: ['upc', 'scan', 'purchase', 'barcode', 'commerce'],
  },
  {
    c: 'bi-upload',
    t: ['upload', 'arrow', 'network', 'miscellaneous'],
  },
  {
    c: 'bi-vector-pen',
    t: ['vector', 'pen', 'graphics'],
  },
  {
    c: 'bi-view-list',
    t: ['view', 'list', 'rearrange', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-view-stacked',
    t: ['view', 'stacked', 'rearrange', 'ui', 'and', 'keyboard'],
  },
  {
    c: 'bi-vinyl',
    t: ['vinyl', 'audio', 'music', 'record'],
  },
  {
    c: 'bi-vinyl-fill',
    t: ['vinyl', 'fill', 'audio', 'music', 'record', 'media'],
  },
  {
    c: 'bi-voicemail',
    t: ['voicemail', 'message', 'telephone', 'communications'],
  },
  {
    c: 'bi-volume-down',
    t: ['volume', 'down', 'audio', 'video', 'av', 'sound', 'media'],
  },
  {
    c: 'bi-volume-down-fill',
    t: ['volume', 'down', 'fill', 'audio', 'video', 'av', 'sound', 'media'],
  },
  {
    c: 'bi-volume-mute',
    t: ['volume', 'mute', 'audio', 'video', 'av', 'sound', 'media'],
  },
  {
    c: 'bi-volume-mute-fill',
    t: ['volume', 'mute', 'fill', 'audio', 'video', 'av', 'sound', 'media'],
  },
  {
    c: 'bi-volume-off',
    t: ['volume', 'off', 'audio', 'video', 'av', 'sound', 'media'],
  },
  {
    c: 'bi-volume-off-fill',
    t: ['volume', 'off', 'fill', 'audio', 'video', 'av', 'sound', 'media'],
  },
  {
    c: 'bi-volume-up',
    t: ['volume', 'up', 'audio', 'video', 'av', 'sound', 'media'],
  },
  {
    c: 'bi-volume-up-fill',
    t: ['volume', 'up', 'fill', 'audio', 'video', 'av', 'sound', 'media'],
  },
  {
    c: 'bi-vr',
    t: ['vr', 'divider', 'vertical-rule', 'typography'],
  },
  {
    c: 'bi-wallet',
    t: ['wallet', 'cards', 'money', 'funds', 'cash', 'payment', 'commerce'],
  },
  {
    c: 'bi-wallet-fill',
    t: ['wallet', 'fill', 'cards', 'money', 'funds', 'cash', 'payment', 'commerce'],
  },
  {
    c: 'bi-wallet2',
    t: ['wallet2', 'cards', 'money', 'funds', 'cash', 'payment', 'commerce'],
  },
  {
    c: 'bi-watch',
    t: ['watch', 'wearables', 'clock', 'devices'],
  },
  {
    c: 'bi-water',
    t: ['water', 'waves', 'levels', 'weather'],
  },
  {
    c: 'bi-whatsapp',
    t: ['whatsapp', 'social'],
  },
  {
    c: 'bi-wifi',
    t: ['wifi', 'internet', 'network', 'wireless', 'communications'],
  },
  {
    c: 'bi-wifi-1',
    t: ['wifi', '1', 'internet', 'network', 'wireless', 'communications'],
  },
  {
    c: 'bi-wifi-2',
    t: ['wifi', '2', 'internet', 'network', 'wireless', 'communications'],
  },
  {
    c: 'bi-wifi-off',
    t: ['wifi', 'off', 'internet', 'network', 'wireless', 'communications'],
  },
  {
    c: 'bi-wind',
    t: ['wind', 'windy', 'breeze', 'weather'],
  },
  {
    c: 'bi-window',
    t: ['window', 'app', 'application', 'layout'],
  },
  {
    c: 'bi-window-dock',
    t: ['window', 'dock', 'application', 'desktop', 'os', 'apps'],
  },
  {
    c: 'bi-window-sidebar',
    t: ['window', 'sidebar', 'application', 'desktop', 'apps'],
  },
  {
    c: 'bi-wrench',
    t: ['wrench', 'tool', 'tools'],
  },
  {
    c: 'bi-x',
    t: ['x', 'delete', 'reset', 'clear', 'cancel', 'close', 'exit', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-x-circle',
    t: ['x', 'circle', 'delete', 'reset', 'clear', 'cancel', 'close', 'exit', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-x-circle-fill',
    t: ['x', 'circle', 'fill', 'delete', 'reset', 'clear', 'cancel', 'close', 'exit', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-x-diamond',
    t: ['x', 'diamond', 'delete', 'reset', 'clear', 'cancel', 'close', 'exit', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-x-diamond-fill',
    t: ['x', 'diamond', 'fill', 'delete', 'reset', 'clear', 'cancel', 'close', 'exit', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-x-octagon',
    t: ['x', 'octagon', 'delete', 'reset', 'clear', 'cancel', 'close', 'exit', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-x-octagon-fill',
    t: ['x', 'octagon', 'fill', 'delete', 'reset', 'clear', 'cancel', 'close', 'exit', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-x-square',
    t: ['x', 'square', 'delete', 'reset', 'clear', 'cancel', 'close', 'exit', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-x-square-fill',
    t: ['x', 'square', 'fill', 'delete', 'reset', 'clear', 'cancel', 'close', 'exit', 'alerts,', 'warnings,', 'and', 'signs'],
  },
  {
    c: 'bi-youtube',
    t: ['youtube', 'social'],
  },
  {
    c: 'bi-zoom-in',
    t: ['zoom', 'in', 'magnify', 'scale', 'graphics'],
  },
  {
    c: 'bi-zoom-out',
    t: ['zoom', 'out', 'minify', 'scale', 'graphics'],
  },
];
export default bootstrapIcons;

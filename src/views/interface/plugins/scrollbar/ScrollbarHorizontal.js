import React from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const ScrollbarHorizontal = () => {
  return (
    <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'scroll', y: 'hidden' } }}>
      <p className="text-nowrap">
        Croissant croissant donut marshmallow ice cream apple pie caramels wafer. Dragée oat cake cheesecake liquorice bonbon cheesecake. Sesame snaps muffin
        marzipan caramels liquorice cake sugar plum candy.
      </p>
      <p className="text-nowrap">
        Muffin marzipan marzipan marshmallow chocolate bar. Carrot cake toffee jelly biscuit candy cotton candy dessert wafer. Bear claw tiramisu bonbon dragée
        biscuit tootsie roll macaroon marshmallow cotton candy. Tiramisu donut dessert apple pie cheesecake croissant sweet tart. Ice cream gingerbread marzipan
        donut.
      </p>
      <p className="text-nowrap">
        Donut caramels biscuit candy candy pie. Powder cookie cookie. Chocolate chocolate bar cheesecake dessert cheesecake chocolate cake. Jelly cupcake apple
        pie topping tiramisu ice cream.
      </p>
      <p className="text-nowrap">
        Pudding jelly powder halvah. Croissant wafer brownie lollipop candy cookie croissant. Jelly beans sweet biscuit chupa chups halvah cookie soufflé
        biscuit. Jujubes carrot cake powder jelly beans. Gummi bears chupa chups lollipop cotton candy candy canes.
      </p>
      <p className="text-nowrap">
        Sweet roll apple pie lemon drops halvah macaroon tiramisu topping. Lemon drops cake bear claw icing topping. Muffin jelly beans cupcake cake. Tiramisu
        brownie cookie pie caramels. Cupcake icing toffee. Donut oat cake candy tootsie roll. Danish sweet chocolate cake muffin. Jujubes jelly beans sugar plum
        biscuit pie cake.
      </p>
      <p className="text-nowrap">
        Muffin cupcake toffee sweet roll cookie. Topping tart cotton candy caramels toffee croissant chocolate cake cookie toffee. Croissant carrot cake apple
        pie marshmallow gummi bears macaroon chupa chups cheesecake. Jelly-o oat cake tootsie roll.
      </p>
      <p className="text-nowrap">
        Tiramisu brownie cookie pie caramels. Cupcake icing toffee. Donut oat cake candy tootsie roll. Danish sweet chocolate cake muffin. Jelly beans sweet
        biscuit chupa chups halvah cookie soufflé biscuit. Jujubes carrot cake powder jelly beans.
      </p>
    </OverlayScrollbarsComponent>
  );
};

export default ScrollbarHorizontal;

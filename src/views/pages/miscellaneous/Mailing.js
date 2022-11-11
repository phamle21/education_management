/* eslint-disable react/no-danger */
import React from 'react';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';

const MiscellaneousMailing = () => {
  const title = 'Mailing';
  const description = 'Mailing';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/miscellaneous', text: 'Miscellaneous' },
  ];

  useCustomLayout({ layout: LAYOUT.Boxed });

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title Start */}
      <div className="page-title-container">
        <h1 className="mb-0 pb-0 display-4">{title}</h1>
        <BreadcrumbList items={breadcrumbs} />
      </div>
      {/* Title End */}

      <div
        dangerouslySetInnerHTML={{
          __html: `
          <div
          style="
            height: auto !important;
            max-width: 600px !important;
            font-family: Helvetica, Arial, sans-serif !important;
            margin-bottom: 40px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <!-- Basic Start -->
          <div style="margin-bottom: 100px">
            <table
              style="
                max-width: 600px;
                background-color: #ffffff;
                border: none;
                border-collapse: separate !important;
                border-radius: 16px;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 0;
                padding: 32px;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                box-shadow: 0 4px 10px rgb(0 0 0/3%) !important;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <img src="/img/logo/logo-blue-light.svg" alt="logo" style="width: 128px; margin-bottom: 30px; clear: both; display: inline-block" />
                    <br />
                    <h6 style="display: inline-block; font-size: 16px; margin: 10px 0; font-weight: 500">Carrot Cake Gingerbread</h6>
                    <div>
                      <p>
                        Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake
                        donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar
                        lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé.
                      </p>
                      <p>
                        Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow
                        muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly
                        <u>pudding lollipop caramels</u>
                        marshmallow.
                      </p>
                      <h6 style="display: inline-block; font-size: 16px; margin: 10px 0; font-weight: 500">Sesame Snaps Lollipop Macaroon</h6>
                      <ul style="list-style: none; padding-left: 0">
                        <li>Croissant</li>
                        <li>Sesame snaps</li>
                        <li>Ice cream</li>
                        <li>Candy canes</li>
                        <li>Lemon drops</li>
                      </ul>
                      <h6 style="display: inline-block; font-size: 16px; margin: 10px 0; font-weight: 500">Muffin Sweet Roll Apple Pie</h6>
                      <p>
                        Carrot cake gummi bears wafer sesame snaps soufflé cheesecake cheesecake cake. Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame
                        snaps chocolate. Lollipop sweet roll sesame snaps powder. Wafer halvah chocolate soufflé icing.
                      </p>
                      <h6 style="display: inline-block; font-size: 16px; margin: 10px 0; font-weight: 500">Muffin Sweet Roll Apple Pie</h6>
                      <p>
                        Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar roll candy canes. Jujubes cheesecake
                        gummi bears cheesecake.
                      </p>
                      <div style="text-align: center; margin-top: 10px">
                        <button type="submit" style="cursor: pointer; padding: 11px 35px; color: #fff; background-color: #2499e3; border: none; border-radius: 8px">
                          Validate
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table style="margin-top: 30px; padding-bottom: 20px; margin-bottom: 40px; width: 600px">
              <tbody>
                <tr>
                  <td style="text-align: center; vertical-align: center">
                    <p style="font-size: 10px; text-decoration: none; line-height: 1; color: #afafaf; margin-top: 0px">
                      If you don't want to receive emails, please
                      <a href="#" style="color: #2499e3; text-decoration: none">Unscubscribe</a>
                      .
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Basic End -->
    
          <!-- Small List Start -->
          <div style="margin-bottom: 100px">
            <table
              style="
                max-width: 600px;
                border: none;
                border-collapse: separate !important;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 0;
                padding: 0px;
                margin-bottom: 20px;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
              "
            >
              <tr>
                <td>
                  <img src="/img/logo/logo-blue-light.svg" alt="logo" style="width: 128px; margin-bottom: 10px; clear: both; display: inline-block" />
                  <p>
                    Dessert gummies soufflé toffee cake. Sesame snaps marzipan sesame snaps gummies oat cake sesame snaps. Cheesecake bonbon chocolate bar.
                    Marshmallow toffee cotton candy. Tart sugar plum candy canes oat cake. Chupa chups cookie icing tart tiramisu chocolate cake.
                  </p>
                </td>
              </tr>
            </table>
    
            <table
              style="
                max-width: 600px;
                background-color: #ffffff;
                border: none;
                border-collapse: separate !important;
                border-radius: 16px;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 10px 0px;
                padding: 0;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                box-shadow: 0 4px 10px rgb(0 0 0 / 3%) !important;
                cursor: pointer;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <div style="width: 152px; height: 136px; display: flex; overflow: hidden; display: block; flex-basis: auto; flex-grow: 0; flex-shrink: 0">
                      <img
                        src="/img/product/small/product-1.webp"
                        alt="product"
                        style="
                          height: 136px;
                          border-radius: initial;
                          border-top-left-radius: 16px;
                          border-bottom-left-radius: 16px;
                          border-bottom-right-radius: initial;
                          border-top-right-radius: initial;
                          object-fit: cover;
                          vertical-align: middle;
                          word-wrap: break-word;
                          text-size-adjust: 100%;
                        "
                      />
                    </div>
                  </td>
    
                  <td style="padding: 20px">
                    <h6 style="display: inline-block; font-size: 14px; margin: 0px; font-weight: 500; color: #2499e3">Ruisreikäleipä</h6>
                    <p style="font-size: 12px">Toffee icing cupcake halvah tart. Marshmallow oat cake lemon drops chocolate bonbon powder.</p>
                    <p style="font-size: 11px; color: #afafaf; margin: 0px">23.10.2020</p>
                  </td>
                </tr>
              </tbody>
            </table>
    
            <table
              style="
                max-width: 600px;
                background-color: #ffffff;
                border: none;
                border-collapse: separate !important;
                border-radius: 16px;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 10px 0px;
                padding: 0;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                box-shadow: 0 4px 10px rgb(0 0 0 / 3%) !important;
                cursor: pointer;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <div style="width: 152px; height: 136px; display: flex; overflow: hidden; display: block; flex-basis: auto; flex-grow: 0; flex-shrink: 0">
                      <img
                        src="/img/product/small/product-2.webp"
                        alt="product"
                        style="
                          height: 136px;
                          border-radius: initial;
                          border-top-left-radius: 16px;
                          border-bottom-left-radius: 16px;
                          border-bottom-right-radius: initial;
                          border-top-right-radius: initial;
                          object-fit: cover;
                          vertical-align: middle;
                          word-wrap: break-word;
                          text-size-adjust: 100%;
                        "
                      />
                    </div>
                  </td>
    
                  <td style="padding: 20px">
                    <h6 style="display: inline-block; font-size: 14px; margin: 0px; font-weight: 500; color: #2499e3">Boule</h6>
                    <p style="font-size: 12px">Macaroon muffin apple pie tiramisu. Topping brownie pastry. Tootsie roll tootsie roll.</p>
                    <p style="font-size: 11px; color: #afafaf; margin: 0px">21.11.2020</p>
                  </td>
                </tr>
              </tbody>
            </table>
    
            <table
              style="
                max-width: 600px;
                background-color: #ffffff;
                border: none;
                border-collapse: separate !important;
                border-radius: 16px;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 10px 0px;
                padding: 0;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                box-shadow: 0 4px 10px rgb(0 0 0 / 3%) !important;
                cursor: pointer;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <div style="width: 152px; height: 136px; display: flex; overflow: hidden; display: block; flex-basis: auto; flex-grow: 0; flex-shrink: 0">
                      <img
                        src="/img/product/small/product-3.webp"
                        alt="product"
                        style="
                          height: 136px;
                          border-radius: initial;
                          border-top-left-radius: 16px;
                          border-bottom-left-radius: 16px;
                          border-bottom-right-radius: initial;
                          border-top-right-radius: initial;
                          object-fit: cover;
                          vertical-align: middle;
                          word-wrap: break-word;
                          text-size-adjust: 100%;
                        "
                      />
                    </div>
                  </td>
    
                  <td style="padding: 20px">
                    <h6 style="display: inline-block; font-size: 14px; margin: 0px; font-weight: 500; color: #2499e3">Spelt Bread</h6>
                    <p style="font-size: 12px">Sweet roll soufflé candy jelly wafer cake drops. Pastry chocolate jujubes dessert.</p>
                    <p style="font-size: 11px; color: #afafaf; margin: 0px">16.10.2020</p>
                  </td>
                </tr>
              </tbody>
            </table>
    
            <table
              style="
                max-width: 600px;
                background-color: #ffffff;
                border: none;
                border-collapse: separate !important;
                border-radius: 16px;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 6px 0px;
                padding: 0;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                box-shadow: 0 4px 10px rgb(0 0 0 / 3%) !important;
                cursor: pointer;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <div style="width: 152px; height: 136px; display: flex; overflow: hidden; display: block; flex-basis: auto; flex-grow: 0; flex-shrink: 0">
                      <img
                        src="/img/product/small/product-4.webp"
                        alt="product"
                        style="
                          height: 136px;
                          border-radius: initial;
                          border-top-left-radius: 16px;
                          border-bottom-left-radius: 16px;
                          border-bottom-right-radius: initial;
                          border-top-right-radius: initial;
                          object-fit: cover;
                          vertical-align: middle;
                          word-wrap: break-word;
                          text-size-adjust: 100%;
                        "
                      />
                    </div>
                  </td>
    
                  <td style="padding: 20px">
                    <h6 style="display: inline-block; font-size: 14px; margin: 0px; font-weight: 500; color: #2499e3">Cholermüs</h6>
                    <p style="font-size: 12px">Drops chocolate bonbon powder drops chocolate. Danish tiramisu roll dessert soufflé.</p>
                    <p style="font-size: 11px; color: #afafaf; margin: 0px">09.10.2020</p>
                  </td>
                </tr>
              </tbody>
            </table>
    
            <table style="margin-top: 30px; padding-bottom: 20px; margin-bottom: 40px; width: 600px">
              <tbody>
                <tr>
                  <td style="text-align: center; vertical-align: center">
                    <p style="font-size: 10px; text-decoration: none; line-height: 1; color: #afafaf; margin-top: 0px">
                      If you don't want to receive emails, please
                      <a href="#" style="color: #2499e3; text-decoration: none">Unscubscribe</a>
                      .
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    
          <!-- Small List End -->
    
          <!-- Large List Start -->
    
          <div>
            <table
              style="
                max-width: 600px;
                border: none;
                border-collapse: separate !important;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 0;
                padding: 0px;
                margin-bottom: 20px;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
              "
            >
              <tr>
                <td>
                  <img src="/img/logo/logo-blue-light.svg" alt="logo" style="width: 128px; margin-bottom: 10px; clear: both; display: inline-block" />
                  <p>
                    Powder chocolate bar soufflé gummi bears jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll
                    chocolate bar dragée bonbon cheesecake icing. Danish wafer donut cookie caramels gummies topping.
                  </p>
                </td>
              </tr>
            </table>
    
            <table
              style="
                max-width: 600px;
                background-color: #ffffff;
                border: none;
                border-collapse: separate !important;
                border-radius: 16px;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 15px 0px;
                padding: 0;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                box-shadow: 0 4px 10px rgb(0 0 0 / 3%) !important;
                cursor: pointer;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <div style="width: 100%; height: 200px; display: flex; overflow: hidden; display: block; flex-basis: auto; flex-grow: 0; flex-shrink: 0">
                      <img
                        src="/img/product/large/product-1.webp"
                        alt="product"
                        style="
                          width: 100%;
                          border-radius: initial;
                          border-top-left-radius: 16px;
                          border-bottom-left-radius: initial;
                          border-bottom-right-radius: initial;
                          border-top-right-radius: 16px;
                          object-fit: cover;
                          vertical-align: middle;
                          word-wrap: break-word;
                          text-size-adjust: 100%;
                        "
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 30px">
                    <h6 style="display: inline-block; font-size: 16px; margin: 0px; font-weight: 500; color: #2499e3">Basic Introduction to Bread Making</h6>
                    <p style="font-size: 14px; margin-bottom: 0px">
                      Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                      Danish wafer donut cookie caramels gummies topping.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style="
                max-width: 600px;
                background-color: #ffffff;
                border: none;
                border-collapse: separate !important;
                border-radius: 16px;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 15px 0px;
                padding: 0;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                box-shadow: 0 4px 10px rgb(0 0 0 / 3%) !important;
                cursor: pointer;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <div style="width: 100%; height: 200px; display: flex; overflow: hidden; display: block; flex-basis: auto; flex-grow: 0; flex-shrink: 0">
                      <img
                        src="/img/product/large/product-2.webp"
                        alt="product"
                        style="
                          width: 100%;
                          border-radius: initial;
                          border-top-left-radius: 16px;
                          border-bottom-left-radius: initial;
                          border-bottom-right-radius: initial;
                          border-top-right-radius: 16px;
                          object-fit: cover;
                          vertical-align: middle;
                          word-wrap: break-word;
                          text-size-adjust: 100%;
                        "
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 30px">
                    <h6 style="display: inline-block; font-size: 16px; margin: 0px; font-weight: 500; color: #2499e3">14 Facts About Sugar Products</h6>
                    <p style="font-size: 14px; margin-bottom: 0px">
                      Chocolate cake biscuit donut cotton candy soufflé cake macaroon. Halvah chocolate cotton candy sweet roll jelly-o candy danish dragée. Apple
                      pie cotton candy tiramisu biscuit cake muffin tootsie roll bear claw cake. Cupcake cake fruitcake.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
    
            <table
              style="
                max-width: 600px;
                background-color: #ffffff;
                border: none;
                border-collapse: separate !important;
                border-radius: 16px;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 15px 0px;
                padding: 0;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                box-shadow: 0 4px 10px rgb(0 0 0 / 3%) !important;
                cursor: pointer;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <div style="width: 100%; height: 200px; display: flex; overflow: hidden; display: block; flex-basis: auto; flex-grow: 0; flex-shrink: 0">
                      <img
                        src="/img/product/large/product-3.webp"
                        alt="product"
                        style="
                          width: 100%;
                          border-radius: initial;
                          border-top-left-radius: 16px;
                          border-bottom-left-radius: initial;
                          border-bottom-right-radius: initial;
                          border-top-right-radius: 16px;
                          object-fit: cover;
                          vertical-align: middle;
                          word-wrap: break-word;
                          text-size-adjust: 100%;
                        "
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 30px">
                    <h6 style="display: inline-block; font-size: 16px; margin: 0px; font-weight: 500; color: #2499e3">10 Secrets Every Southern Baker Knows</h6>
                    <p style="font-size: 14px; margin-bottom: 0px">
                      Caramels tart danish jelly lemon drops cotton candy muffin. Icing fruitcake bear claw fruitcake tart ice cream chocolate bar sweet roll.
                      Cupcake gummi bears fruitcake. Fruitcake cake liquorice fruitcake caramels marshmallow lollipop.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
    
            <table style="margin-top: 30px; padding-bottom: 20px; margin-bottom: 40px; width: 600px">
              <tbody>
                <tr>
                  <td style="text-align: center; vertical-align: center">
                    <p style="font-size: 10px; text-decoration: none; line-height: 1; color: #afafaf; margin-top: 0px">
                      If you don't want to receive emails, please
                      <a href="#" style="color: #2499e3; text-decoration: none">Unscubscribe</a>
                      .
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Large List End -->
        </div>
                    `,
        }}
      />
    </>
  );
};

export default MiscellaneousMailing;

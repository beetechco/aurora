import * as JSDOM from 'jsdom';

const html = `
<!doctype html>
<html>
  <body>
    <div id='root'>
    <div>
  </body>
</html>
`;

const testDom = () => {
  const dom = new JSDOM.JSDOM(html);

  global.document = dom.window.document;
  global.window = dom.window;

  return dom;
};

export {
  testDom,
};
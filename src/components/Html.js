// Page template from Bartek Dybowski
// https://github.com/burczu/react-server-side-rendering-example/blob/master/src/components/Html.js

import React from 'react'

const Html = ({ children, context, scripts }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <title>Server Side Rendered React App!!</title>
    </head>
    <body>
      <div
        id="root"
        dangerouslySetInnerHTML={{ __html: children }}
      />

      {context && (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.APP_CONTEXT=${JSON.stringify(context)}`
          }}
        />
      )}

      {scripts.map((item, index) => <script key={index} src={item} />)}
    </body>
  </html>
)

export default Html
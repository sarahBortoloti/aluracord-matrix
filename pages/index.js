import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { Login, PhotoArea, Title } from '../components';
function GlobalStyle () {
return (
  <style jsx>
    {`*{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }
    
    body{
      font-family: 'Open Sans', sans serif;
    }

    html, body, #__next {
      min-height: 100vh;
      display: flex;
      flex: 1;
    }
    #__next {
      flex: 1;
    }
    #__next > * {
      flex: 1;
    }
    
    `}
  </style>
)
};


export default function HomePage() {
  const username = 'peas';

  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Login username={username} />
      </Box>
    </>
  );
}
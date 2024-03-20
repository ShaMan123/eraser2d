import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import {
  ButtonGroup,
  Container,
  Nav,
  Navbar,
  ToggleButton,
} from 'react-bootstrap';
import '../index.css';
import { Tool } from '../src/tool';

export default function App({ Component, pageProps }: AppProps) {
  const [tool, setTool] = useState<Tool>('erase');
  return (
    <>
      <Head>
        <title>Erase2d App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <strong>Erase2d</strong> App
          </Navbar.Brand>

          <Nav className="me-auto">
            <ButtonGroup>
              {(['default', 'erase', 'undo'] as const).map((toolType) => (
                <ToggleButton
                  key={toolType}
                  id={`radio-${toolType}`}
                  type="radio"
                  variant="outline-info"
                  name="radio"
                  value={toolType}
                  checked={tool === toolType}
                  onChange={() => setTool(toolType)}
                >
                  {toolType}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Nav>

          <Nav>
            <Nav.Link
              href="https://github.com/ShaMan123/erase2d"
              target="_blank"
              rel="noopener noreferrer"
              active={false}
            >
              <i className="bi bi-github"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Component {...pageProps} tool={tool} />
    </>
  );
}

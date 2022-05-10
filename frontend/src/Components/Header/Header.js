import {Button,Navbar,Nav} from 'react-bootstrap'

export default function Header()
{
  const title="</getPlasma>"
  
  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand href="#home">
        {title}
      </Navbar.Brand>
    </Navbar>
    )
}
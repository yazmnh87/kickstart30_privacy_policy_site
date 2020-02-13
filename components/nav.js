import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.nav`
display: flex;
justify-content: flex-start;
border: 1px solid #001f5f;
`
const Content = styled.div`
display: flex;
height: 100%;
width: 60%;
justify-content: space-between;

div{
  display: flex;
  width: 120px;
  justify-content:space-between;
  align-items: center;
}

a{
  font-family: Arial, Helvetica, sans-serif;
  color: #001f5f;
  text-decoration: none;
}

img{
  align-self:center;
}
`

const Nav = () => (
  <Container>'
  <Content>
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
    </div>
    <img src={'KS30_login.png'}/>
    </Content>
  </Container>
)

export default Nav

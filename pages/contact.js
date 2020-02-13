import React from 'react'
import styled from 'styled-components'
import Nav from '../components/nav'


const Container = styled.div`
  display: flex;
  flex-direction:column;
  height:20vh;


  h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: #001f5f;
    margin: auto;
  }
  h2{
    font-family: Arial, Helvetica, sans-serif;
    color: #001f5f;
    margin: auto; 
  }

  p{
    font-family: Arial, Helvetica, sans-serif;
      margin:auto;
      color: #001f5f;
  }
  `

const Contact = props =>{
    return (
        <>
        <Nav />
        <Container>
            <h1>Contact Info</h1>
            <h2>More Resources Coming soon!</h2>
            <p>
                Email: wildcardev@gmail.com
            </p>
        </Container>
        </>
    )
}

export default Contact;
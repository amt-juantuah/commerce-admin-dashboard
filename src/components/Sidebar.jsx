import { LineStyle, Settings, Timeline, TrendingUp } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div``
const Wrapper = styled.div``
const Menu = styled.div``
const Title = styled.h3``
const List = styled.ul`
    list-style: none;
`

const Para = styled.p`
    display: none;
`

const ListItem = styled.li`
    display: flex;
    align-items:center;
    gap: 10px;
    &:hover ${Para} {
        display: block;
    }
`


function Sidebar() {
  return (
    <Container>
        <Wrapper>
            <Menu>
                <Title>Dashboard</Title>
                <List>
                    <ListItem>
                        <LineStyle />
                        <Para>Home</Para>
                    </ListItem>
                    <ListItem>
                        <Timeline />
                        <Para>Analytics</Para>
                    </ListItem>
                    <ListItem>
                        <TrendingUp />
                        <Para>Sales</Para>
                    </ListItem>
                    <ListItem>
                        <Settings />
                        <Para>Settings</Para>
                    </ListItem>
                </List>
            </Menu>
        </Wrapper>
    </Container>
  )
}

export default Sidebar
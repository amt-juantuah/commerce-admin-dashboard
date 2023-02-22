import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #fff;
    top: 0;
    position: sticky;
    z-index: 9;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div``;

const Right = styled.div`
    display: flex;
    flex-flow: row;
    gap: 8px;
`;

const Span = styled.span`
    font-weight: 800;
    font-size: 25px;
    color: blue;
    cursor: pointer;
`;

const Icons = styled.div`
    position: relative;
    cursor: pointer;
`;

const IconBadge = styled.div`
    position: absolute;
    color: #fff;
    font-size: 10px;
    top: -0px;
    left: -2px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    border-radius: 50%;
`;

const Avatar = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0.5px dashed red;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    background-image: url('https://media.istockphoto.com/id/175484660/photo/adorable-expressive-little-girl.jpg?s=612x612&w=is&k=20&c=Okd_35ALHcbYaB2ePk8rfvs6QatpPLCjoEIJMEGhLp8=')
`;

function Topbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Span>MegaTron Front</Span>
            </Left>
            <Right>
                <Icons>
                    <NotificationsNone />
                    <IconBadge>2</IconBadge>
                </Icons>

                <Icons>
                    <Language />
                    <IconBadge>2</IconBadge>
                </Icons>

                <Icons>
                    <Settings />
                </Icons>

                <Avatar/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Topbar
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil"
import logo from './header_logo.svg';
import { tokenState, userState } from "../../store/session"
import styled from "styled-components";
import user_logo from './user_img.svg'
import { theme } from "../../styles/theme";
import search_logo from './search_img.svg'
import { useMyInfo } from "../../hooks/session";

export const Header = () => {
    const [token, setToken] = useRecoilState(tokenState);
    const [user, setUser] = useRecoilState(userState)
    const navigate = useNavigate()
    const [req, res] = useMyInfo();

    useEffect(() => {
        if(!user){
            req(token)
        }
        if (!token) {
            navigate('/login')
        }
    }, [navigate, token, req, user])

    useEffect(() => {
        if (!res.loading && res.data && !res.error && res.called) {
            if (res.data.isSuccess) {
                setUser(res.data.result)
            } else {
                console.log(res)
            }
        }
    }, [res, setUser])

    const handleLogout = useCallback(() => {
        setToken(null)
        setUser(null)
    }, [setToken, setUser])

    const handleClick = useCallback(() => {
        navigate('/')
    }, [navigate])

    const handleMypage = useCallback(()=>{
        navigate('/mypage')
    },[navigate])
    return (
        <Container>
            <img src={logo} alt='' style={{margin: '20px', cursor:'pointer', height: '50px'}} onClick={handleClick}/>
            <UserContainer>
                <img src={user_logo} alt='' style={{cursor:'pointer'}} onClick={handleMypage}/>
                <UserInfo onClick={handleLogout}>{user?.name}님 환영합니다.</UserInfo>
                <SearchContainer>
                    <SearchInput type='text'/>
                    <SearchIcon src={search_logo} alt=''/>
                </SearchContainer>
            </UserContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: white;
    height: 70px;
`

const UserContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
`

const UserInfo = styled.div`
    color: ${theme.colors.gray};
    font-size: ${theme.size.font.body1};
    max-width: 150px;
    white-space: normal;
    margin-left: 5px;
    min-height: 30px;
    margin-right: 50px;
`

const SearchContainer = styled.div`
    display: flex;
    position: relative;
    height: 40px;
    width: 460px;
`

const SearchInput = styled.input`
    all: unset;
    background-color: ${theme.colors.grayLight};
    width: 460px;
    height: 30px;
    padding: 5px;
    border: 0.5px solid ${theme.colors.primaryLight};
    &:focus {
        border: 2px solid ${theme.colors.primary};
    }
`

const SearchIcon = styled.img`
    position: absolute;
    top: 0;
    cursor: pointer;
    width: 40px;
    right: 0;
`
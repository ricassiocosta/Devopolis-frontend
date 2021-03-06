import styled from 'styled-components'

export const FeedPage = styled.div`
  font-family: 'Roboto';
  background: #E5E5E5;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`
export const Content = styled.div`
  width: 800px;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
`
export const LeftBar = styled.div`
  width: 250px;
  height: 100%;
  padding-bottom: 20px;
  border-radius: 10px;
  background: #fff;
  position: relative;
  line-height: 48px;
  input {
    margin-left: 12%;
    height: 30px;
    width: 75%;
    border-radius: 5px;
    margin-top: 20px;
    background-color: #eeeeee;
    text-indent: 30px;
    outline: none;
  }
  #searchIcon {
    position: absolute;
    left: 37px;
    top: 26px;
  }
  p {
    font-family: 'RobotoBold';
    font-size: 13px;
    color: gray;
    margin-bottom: -10px
  }
`
export const FeedHistory = styled.div`
  width: 530px;
  height: 84vh;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  margin-left: 26px;
  overflow-y: auto;
  ::-webkit-scrollbar{
    display: none
  }
`

export const RightBar = styled.div `

`

export const OnlineFriends = styled.div`
  margin-left: 12%;
  margin-top: 10px;
  img {
    width: 35px;
    border-radius: 50%;
  }
  span {
    font-family: 'RobotoBold';
    margin-left: 5px;
  }
`

export const Friend = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const DevsFound = styled.div`
  display: flex;
  flex-direction: column;
  width: 185px;
  margin-left: 12%;
  position: absolute;
  background: #fafafa;
  max-height: 200px;
  border-radius: 0 0 12px 12px;
  top: 51px;
  overflow-y: auto;
  overflow-x: hidden;
  div {
    width: 100%;
    display: flex;
    margin-left: 10px;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    img {
      width: 40px;
      border-radius: 50%;
    }
    span {
      font-family: 'RobotoBold';
      margin-left: 10px;
      font-size: 14px
    }
  }
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  > div {
    margin: 0 !important;
    position: relative !important;
  }
`
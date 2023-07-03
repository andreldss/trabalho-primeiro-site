"use client"

import { styled } from "styled-components"

import { Josefin_Sans } from 'next/font/google'
import { PrimaryInput, PrimaryInputWSearchIcon } from "./primary-input"


const josefin = Josefin_Sans({ 
  weight : ['500'], 
  subsets: ['latin']
 })


interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px 0px;
`

const Logo = styled.a`
    color: var(--blue-low);
    font-weight: 400;
    font-size: 70px;
    line-height: 150%;
    margin-left: 200px
`
const LogoMenor = styled.a`
    color: var(--blue-low);
    font-weight: 400;
    font-size: 30px;
    line-height: 150%;
`

export function Header(props: HeaderProps) {
    return(
        <TagHeader>
            <Logo className={josefin.className}> 
                HAMP 
                <LogoMenor className={josefin.className}> SOFTWARES </LogoMenor> 
            </Logo>
            
            <div>
                <PrimaryInputWSearchIcon placeholder="Procure aqui"/>
            </div>
        </TagHeader>
    )
}
import styled from "styled-components";

export const HeaderStyle = styled.header`
    position: relative;
    height: 80px;
    width: 100%;
    /* background-color: var(--color1); */
    display: flex;
    padding: 0px 15px;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    z-index: 10;
    box-shadow: 0px 10px 15px rgb(0, 0, 0, 0.4);

    .background {
        background-color: var(--color1);
        position: absolute;
        width: 100%;
        height: 80px;
        left: 0px;
        z-index: -2;
    }

    h1 {
        display: none;
    }

    .search {
        height: 40px;
        display: flex;
        width: 100%;
        transition: 1s;
       
        input {
            height: 40px;
            width: 100%;
            border: none;
            padding: 0px 10px;
            background-color: var(--grey_3);
            outline: none;
            border-radius: 0px 8px 8px 0px;
            font-size: 16px;
        }

        .icon {
            height: 40px;
            width: 40px;
            padding: 6px;
            background-color: var(--grey_3);
            border-radius: 8px 0px 0px 8px;
            color: var(--color1);
            
        }
    }

    .profile {
        width: 150px;
        right: 15px;
        display: flex;
        align-items: center;
        gap: 15px;
        transition: 1s;
        z-index: 3;

        .icon {
            width: 40px;
            height: 40px;
            color: var(--grey_3);
        }

        img {
            height: 50px;
            width: 50px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    nav {
        position: absolute;
        height: 430px;
        width: 275px;
        background-color: var(--color1);
        top: 78px;
        /* border: 2px solid red; */
        right: 0px;
        z-index: -4;
        padding: 0px 15px;
        border-radius: 0px 0px 0px 8px;
        transition: 1s;

        ul {
            width: 100%;
            height: 100%;
            /* background-color: aqua; */
            z-index: 0;

            

            li {
                height: 60px;
                width: 100%;
                /* border: solid 2px red; */
                display: flex;
                align-items: center;
                gap: 15px;
                color: var(--grey_3);
                border-bottom: 2px solid var(--grey_3);
                padding: 10px;
                z-index: -2;

                a {
                    color: var(--grey_3);
                    font-size: 22px;
                }

                

                .icon {
                    height: 40px;
                    width: 40px;
                }
            }

            & .notBoder {
                border: none;
            }
        }

        &.close {
            transition: 1s;
            transform: translateY(-120%);
        }
    }

    @media (min-width: 800px) {
        padding: 0px 30px;

        h1 {
            display: block;
            min-width: fit-content;
            color: var(--grey_3);
            font-size: 24px;
        }

        .search {
            max-width: 600px;
        }
    }

    @media (max-width: 600px) {
        .search {
            &:hover {
            right: 15px;
            left: 15px;
            width: 150%;
            transition: 1s;
        }

            &:hover ~ .profile {
                width: 0%;
                opacity: 0%;
                transition: 1;

                .img {
                    width: 0%;
                }
            }
        }
    }
`
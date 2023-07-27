import styled from "styled-components";

export const MenuInDashboardStyle = styled.div`
   padding: 30px;
   display: flex;
   flex-direction: column;
   gap: 32px;

   .owner {
    display: flex;
    gap: 15px;
    align-items: center;

        .name {
            color: var(--color1);

            p {
                font-size: 18px;
                font-weight: 400;
                color: var(--grey_1);
            }
        }

        img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    nav {
        width: 100%;

        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            li {
                font-size: 24px;
                border-bottom: 3px solid var(--grey_1);

                a {
                    color: var(--grey_1);
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding-bottom: 10px;
                    transition: 1s;

                    &:hover {
                        color: var(--color1);
                        transition: 1s;
                        /* transform: ; */
                        transform: translateX(15px) scale(1.1);
                    }
                }

                .icon {
                    font-size: 40px;
                }
            }

            .borderless {
                border: none;
            }

            
        }
    }

`
import styled from "styled-components";

export const HomeStyle = styled.section`
    background-color: var(--grey_2);
    min-height: 100vh;
    height: max-content;

    .dashboardBody {
        display: flex;
        gap: 15px;
        justify-content: space-between;
        padding: 15px;
   
        .menu {
            display: none;
            max-width: 350px;
        }

       .feed {
            width: 100%;
            min-height: 120vh;
            max-width: 750px;
            margin-top: 100px;
         
        }

       .friends {
            position: relative;
            display: none;
            max-width: 350px;
            margin-top: 100px;
        }
    }

    @media (min-width: 800px) {

        .dashboardBody{
            .feed {
                width: 60%;
            }

            .friends {
                display: flex;
                width: 35%;
                height: 80vh;

                .sectionFriends {
                    position: fixed;
                    right: 15px;
                    width: 35%;
                    max-width: 350px;
                }
            }
        }
    }

    @media (min-width: 1400px) {
        .dashboardBody{
            .menu {
                display: flex;
                width: 35%;
                height: 80vh;
                margin-top: 100px;

                .sectionMenu {
                    position: fixed;
                    background-color: var(--grey_3);
                    width: 35%;
                    max-width: 350px;
                    /* height: 400px; */
                    border-radius: 8px;
                }
            }
        }
    }
    
`
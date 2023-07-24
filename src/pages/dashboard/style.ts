import styled from "styled-components";

export const DashboardStyled = styled.section`
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
            border: 2px solid var(--grey_1);
        }

       .feed {
            width: 100%;
            min-height: 120vh;
            /* border: 2px solid var(--grey_1); */
            max-width: 750px;
            margin-top: 100px;
       }

       .friends {
            position: relative;
            display: none;
            max-width: 350px;
            /* border: 2px solid var(--grey_1); */
            margin-top: 100px;
            /* width: 35%; */

            
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
                    /* background-color: aqua; */
                }
            }
        }

        
    }

    @media (min-width: 1400px) {
        .dashboardBody{
            .menu {
                display: flex;
                width: 35%;
                height: 90vh;
            }
        }
    }
    
`
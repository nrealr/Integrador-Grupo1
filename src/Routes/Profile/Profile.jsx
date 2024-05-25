import { Container, Grid } from "@mui/material";
import React from "react";

export const Profile =()=>{
    return(
        <Container>

            <Grid container
                 
             sx={{
                border: '1px solid black',                 
              }}
            >
                <Grid item xs={3} sx={{ gridColumn: '1 / 4' }}>
                    <aside>
                        <h1>hola</h1>
                        <nav>
                            <a href="/profile/account">
                                <span>Personal</span>
                            </a>
                            <a href="/profile/password">
                                <svg>icono</svg>
                                <span>Account</span>
                            </a>
                            <a href="/profile/appointments">
                            <svg>icono</svg>
                                <span>Appointments</span>
                            </a>
                        </nav>
                    </aside>
                </Grid>
                
                <Grid item xs={9} sx={{ gridColumn: '4 / 13' }}>
                
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        sx={{
                            border: '1px solid black',                 
                        }}
                        >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio, molestias dolores, velit dolor tempora sed, provident veritatis consequatur ipsam vel. Blanditiis inventore quas impedit ab distinctio itaque? Laboriosam, iusto?</p>                
                    </Grid>
                    
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        sx={{
                            border: '1px solid black',                 
                        }}
                        >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio, molestias dolores, velit dolor tempora sed, provident veritatis consequatur ipsam vel. Blanditiis inventore quas impedit ab distinctio itaque? Laboriosam, iusto?</p>                
                    </Grid>
                </Grid>

            </Grid>
        </Container>

        
    )
}
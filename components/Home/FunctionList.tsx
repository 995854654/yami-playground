import React from 'react'
import {
  Box, ImageList, ImageListItem, ImageListItemBar, Paper
} from '@mui/material'
import menuList from "@/config/menu"
import Link from 'next/link';
import Grid from '@mui/material/Unstable_Grid2';
import "./functionList.css"

export default function FunctionList() {
  return (
    <Grid container spacing={20}>
      <Grid xs={3}></Grid>
      <Grid xs={6} display="flex" justifyContent="center" alignItems="center"
      >
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <ImageList cols={3} gap={50}
            sx={{
              scrollbarWidth: "none",
              padding: "20px"

            }}
          >
            {
              menuList.map((item, index) => {
                return (
                  <Box
                    key={item.key}
                    className="div-menu-item"
                    sx={{
                      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
                      borderRadius: '10px',
                      backgroundColor: "white",
                      paddingLeft: "15px",
                      position: "relative"

                    }}
                  >
                    <Link href={item.url}>

                      <ImageListItem>
                        <img
                          src={`${item.imageURL}`}
                          style={{
                            width: "150px", height: "150px",
                            marginLeft: "20px"
                          }}
                          alt={item.meta}
                          loading="lazy"
                        />
                      </ImageListItem>
                      <ImageListItemBar
                        title={item.meta}
                        subtitle={<span>{item.description}</span>}
                        position="below"
                      />
                    </Link>

                  </Box>




                )
              })
            }
          </ImageList>
        </Box>

      </Grid>
      <Grid xs={3}></Grid>
    </Grid>

  )
}

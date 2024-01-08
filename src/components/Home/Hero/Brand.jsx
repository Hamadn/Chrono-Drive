import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "../../container/Container";
import Logo from "../../Logo";
import Ferrari from "/home/hamad/Chrono Drive Website/Chrono Drive/src/assets/ferrari-seeklogo.com-5.svg";
import Audi from "/home/hamad/Chrono Drive Website/Chrono Drive/src/assets/audi-seeklogo.com.svg";
import McLaren from "/home/hamad/Chrono Drive Website/Chrono Drive/src/assets/mclaren-seeklogo.com.svg";
import Tesla from "/home/hamad/Chrono Drive Website/Chrono Drive/src/assets/tesla-seeklogo.com.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "15px",
}));

export default function Brand() {
  return (
    <div className="grid place-items-center min-h-[80vh] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-gray-100">
      <h1 className="text-4xl md:text-[50px] font-extrabold leading-tight mb-6 text-center">
        Why Choose Us <span className="text-red-700">CHRONODRIVE?</span>
      </h1>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid xs={12} md={6} lg={4}>
              <Item>
                <div>
                  <div className="p-8 space-y-3 border-2 border-red-700 rounded-xl">
                    <span className="inline-block text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                      Expert Certified Mechanics
                    </h1>

                    <p className="text-gray-500 dark:text-gray-300">
                      Our mechanics hold industry-recognized certifications,
                      demonstrating their expertise and commitment to staying at
                      the forefront of automotive technology.
                    </p>

                    <a
                      href="#"
                      className="inline-flex p-2 text-red-500 capitalize transition-colors duration-300 transform bg-red-100 rounded-full rtl:-scale-x-100 hover:text-red-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <Item>
                <div>
                  <div className="p-8 space-y-3 border-2 border-red-700 rounded-xl">
                    <span className="inline-block text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                      Genuine Spare Parts
                    </h1>

                    <p className="text-gray-500 dark:text-gray-300">
                      Choose CHRONODRIVE for quality repairs and maintenance
                      using only genuine spare parts. Drive with confidence
                      knowing that your vehicle is equipped with the best.
                    </p>

                    <a
                      href="#"
                      className="inline-flex p-2 text-red-500 capitalize transition-colors duration-300 transform bg-red-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-red-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid xs={12} md={12} lg={4}>
              <Item>
                <div>
                  <div className="p-8 space-y-3 border-2 border-red-700 rounded-xl">
                    <span className="inline-block text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                      Get Reasonable Price
                    </h1>

                    <p className="text-gray-500 dark:text-gray-300">
                      At CHRONODRIVE, we believe in providing our customers with
                      more than just vehicles – we offer unbeatable value.Visit
                      CHRONODRIVE and experience the perfect blend of quality
                      and affordability.
                    </p>

                    <a
                      href="#"
                      className="inline-flex p-2 text-red-500 capitalize transition-colors duration-300 transform bg-red-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-red-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
              <Item>
                <div className="py-14 border-2 border-red-700 rounded-xl">
                  <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-xl mx-auto text-center">
                      <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Best Selling Brands
                      </h3>
                    </div>
                    <div className="mt-12 flex justify-center">
                      <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                        {/* LOGO 1 */}
                        <li className="flex">
                          <Logo img={Ferrari} />
                        </li>

                        {/* LOGO 2 */}
                        <li className="flex">
                          <Logo img={Audi} />
                        </li>

                        {/* LOGO 3 */}
                        <li className="flex">
                          <Logo img={McLaren} />
                        </li>

                        {/* LOGO 4 */}
                        <li className="flex">
                          <Logo img={Tesla} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

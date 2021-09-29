import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import News from "../news/News";

const Newspaper = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2021-08-28&sortBy=publishedAt&apiKey=a4c85fe4728d43fcbfa4caac54969208"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {articles.map((article,index) => <Grid item xs={2} sm={4} md={4} key={index}>
            <News article={article} />
        </Grid>)}
      </Grid>
    </Box>
  );
};

export default Newspaper;

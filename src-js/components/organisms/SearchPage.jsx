//General SearchPage
import * as React from "react";
import {
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import SearchBar from "../atoms/SearchBar";
import HorizontalSplitText from "../atoms/HorizontalSplitText";
import "./SearchPage.css";

function SearchPage({onSearchTextChange, textObject}) {
  return (
    <Grid
    alignItems="center"
    container
    direction="column"
    justify="center"
    spacing={3}
  >
    <Grid item md={6} sm={9} xs={12}>
      <SearchBar onChange={onSearchTextChange}/>
    </Grid>
    <Grid item md={6} sm={9} xs={12}>
      <HorizontalSplitText textObject={textObject}/>
    </Grid>
    <Grid item md={6} sm={9} xs={12}>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            2020-06-26
          </Typography>
          <Typography variant="h5" component="h2">
            Expedita mollitia dolores
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            <Link
              href="http://sigmund.com"
              rel="noopener"
              target="_blank"
            >
              http://sigmund.com
            </Link>
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            Sit officia temporibus officiis dolores aliquam sint.
            Voluptatem id magni quod atque qui voluptates aspernatur. Aut
            repellendus vel. Vitae nam voluptatum dolore molestiae ut.
            Reprehenderit non eos quibusdam excepturi et voluptas dolor
            eaque.
          </Typography>
          <Typography align="right" color="textSecondary" variant="body2">
            Risk score: 97
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  );
}

export default SearchPage;
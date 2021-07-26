import * as React from "react";
import {
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import { format } from 'date-fns'
import "./ResultCard.css";

function ResultCard({ item, classes }) {

  const date = format(new Date(item.date_published), 'yyyy-MM-dd');

  return (
    <Card className={classes}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          <Link
            href={item.url}
            rel="noopener"
            target="_blank"
          >
            {item.url}
          </Link>
        </Typography>
        <Typography gutterBottom variant="body2" component="p">
          {item.snippet}
        </Typography>
        <Typography align="right" color="textSecondary" variant="body2">
          Risk score: {item.risk_score}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ResultCard;
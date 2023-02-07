import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "../../App.css";

export default function SummaryCard({ items, amount }) {
  return (
    <Card className="card" variant="elevation" elevation={8}>
      <CardContent>

        <Typography className="summary-text" color="textSecondary">
          Total Items : <strong className="summary-text">{items}</strong>
        </Typography>
        <Typography className="summary-text" variant="h5" gutterBottom>
          Total : <strong className="summary-text">${amount}</strong>
        </Typography>
        {amount > 0 && (
          <Link className="hvr-grow about-button" to="/checkout">
            Pagar
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

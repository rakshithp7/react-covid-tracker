import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const InfoBox = ({ title, cases, total }) => {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* Title */}
        <Typography class="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* Cases */}
        <h2 class="infoBox__cases">{cases}</h2>

        {/* Total */}
        <Typography class="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;

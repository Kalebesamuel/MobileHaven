import React from "react";
import { Card, CardText } from "reactstrap";

//= ==========================================================================================
export default function HighlighterCard({ type = "defaultv1", text }) {
  const types = {
    defaultv1: { color: "rgb(66, 72, 87)", icon: "business_globe" },
    accent: { color: "rgb(45, 104, 202)", icon: "business_globe" },
    success: { color: "rgb(63, 132, 84)", icon: "business_globe" },
    warning: { color: "rgb(242, 170, 60)", icon: "business_globe" },
    danger: { color: "rgb(171, 41, 58)", icon: "business_globe" },
  };

  const typeConfig = types[type] || types.defaultv1;

  return (
    <Card style={{ ...styles.cardStyle, backgroundColor: typeConfig.color }}>
      <CardText style={styles.textContainer}>
        <i style={styles.icon} className={"now-ui-icons " + typeConfig.icon} />
        <span style={styles.textStyle}>
          {typeof text === "function" ? text() : text}
        </span>
      </CardText>
    </Card>
  );
}

//= ==============================================================================================
const styles = {
  icon: {
    paddingRight: "10px",
    marginTop: "-2px",
  },
  cardStyle: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "10px",
    paddingTop: "8px",
    paddingBottom: "8px",
    fontSize: "14px",
    alignItems: "center",
    textAlign: "center",
  },
  textStyle: {
    color: "#000",
    fontWeight: 500,
  },
  textContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
};
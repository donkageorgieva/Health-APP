import Badge from "./Badge/Badge";

const BadgeGroup = (props) => {
  const badges = props.badges.map((badge) => (
    <Badge
      key={badge.text}
      badgeClicked={badge.onClick}
      text={badge.text}
      badgeColorClass={badge.class}
    />
  ));
  return <div className="d-flex">{badges}</div>;
};

export default BadgeGroup;

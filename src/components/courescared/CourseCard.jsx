function CourseCard({ name, textColor }) {
  return (
    <div style={{ color: textColor }}>
      <div>{name}</div>
    </div>
  );
}

export default CourseCard;
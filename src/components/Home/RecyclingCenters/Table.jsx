const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Materials</th>
          <th>Open Hours</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{item.materials}</td>
            <td>{item.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

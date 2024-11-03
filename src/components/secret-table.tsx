const nameMap = JSON.parse(process.env.SECRET_DATA || "{}");

const SecretTable = () => {
  return (
    <div>
      <ul>
        {Object.entries(nameMap).map(([name, role], index) => (
          <li key={index}>
            {name}: {role as string}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecretTable;

interface DirectorListItemProps {
  name: string;
  role: string;
}

const DirectorListItem = ({ name, role }: DirectorListItemProps) => (
  <li className="mb-4">
    <div className="flex flex-col">
      <span className="font-bold">{name}</span>
      <span className="text-sm">{role}</span>
    </div>
  </li>
);

export default DirectorListItem;

import XIcon from "@/icon/x";
import DCIcon from "@/icon/dc";
import GitHubIcon from "@/icon/github";
const Links = () => {
  return (
    <div className="flex gap-4 items-center">
      <a
        href="https://x.com/xxcypressen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <XIcon />
      </a>
      <a
        href="https://discordapp.com/users/1203694582240514109"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DCIcon />
      </a>
      <a
        href="https://github.com/cypressen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
  );
};
export default Links;

import "./Tool.scss";
import Talk from "../../components/Talk/Index";
import * as conversation from "../../content/conversation.json";

const renderShelf = (name) => {
  let logoPath = "asset/" + name + ".svg";
  let altText = name;
  return <img src={logoPath} className="tool__shelf__icon" alt={altText} />;
};

const Tools = () => {
  const Languages = ["c", "js", "solidity", "python"];
  const Framework = ["react", "expressjs", "nodejs", "jquery", "bootstrap"];
  const Tools = ["vscode", "hyper", "git", "remix", "github"];
  const Workflow = ["travis", "netlify", "eslint", "prettier"];
  const Databases = ["mongodb", "mysql", "cockroachdb"];

  return (
    <div>
      <Talk
        message={conversation.converation[0].tools}
        xOffset="60%"
        yOffset="10%"
      />
      <div className="tools__page">
        <div className="tool__container">
          <div className="tool__shelf">
            <div className="tool__shelf__label">Languages</div>
            {Languages.map((data, index) => renderShelf(data))}
          </div>
          <div className="tool__shelf">
            <div className="tool__shelf__label">Framework</div>
            {Framework.map((data, index) => renderShelf(data))}
          </div>
          <div className="tool__shelf">
            <div className="tool__shelf__label">Tools</div>
            {Tools.map((data, index) => renderShelf(data))}
          </div>
          <div className="tool__shelf">
            <div className="tool__shelf__label">Workflow</div>
            {Workflow.map((data, index) => renderShelf(data))}
          </div>
          <div className="tool__shelf">
            <div className="tool__shelf__label">Databases</div>
            {Databases.map((data, index) => renderShelf(data))}
          </div>
        </div>
        <div className="soothing">
        </div>
      </div>
    </div>
  );
};

export default Tools;

import { templates } from '../../src/Logic/templates';
import { fillTemplate } from '../../src/Logic/generator';

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req, res) => {
  const selection = Math.floor(Math.random() * templates.length);
  res.send(`"${fillTemplate(null, null, selection)}"`);
};

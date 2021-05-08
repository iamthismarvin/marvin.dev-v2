const sections = ['Home', 'Stack', 'Projects', 'Contact'];

export const help = (): string[] => {
  return [
    `HELP`,
    `cd [section] | Move to section.`,
    `clear | Clear terminal log.`,
    `help | List available commands.`,
    `ls | List available sections.`,
  ];
};

export const changeDirectory = (section: string): string | string[] => {
  if (sections.includes(section)) {
    return ['CD', `${section}`, `Moving to [${section}] section.`];
  }
  return `Section does not exist.`;
};

export const listSections = (): string => {
  return sections.join('    ');
};

export const clear = (): string[] => {
  return ['CLEAR'];
};

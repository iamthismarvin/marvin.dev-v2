const sections = ['Home', 'Stack', 'Projects', 'Contact'];

export const changeDirectory = (section: string): string | string[] => {
  if (sections.includes(section)) {
    return ['CD', `${section}`, `Moving to [${section}] section.`];
  }
  return `[${section}] section does not exist.`;
};

export const clear = (): string[] => {
  return ['CLEAR'];
};

export const exit = (): string[] => {
  return ['EXIT'];
};

export const help = (): string[] => {
  return [
    `HELP`,
    `cd [section] | Move to section.`,
    `clear | Clear terminal log.`,
    `help | List available commands.`,
    `ls | List available sections.`,
  ];
};

export const listSections = (): string => {
  return sections.join('    ');
};

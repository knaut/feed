import colors from './colors';

const normal = {
  border: `5px solid ${colors.neutrals.gray1}`,
  width: '150px',
  height: '150px',
  overflow: 'hidden'
};

const mini = {
  border: `3px solid ${colors.neutrals.gray1}`,
  width: '75px',
  height: '75px',
  overflow: 'hidden'
};

const avatar = {
  normal, 
  mini
};

export default avatar;
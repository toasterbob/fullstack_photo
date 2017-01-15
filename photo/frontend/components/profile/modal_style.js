const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.45)'
  },
  content : {
    top                   : 'calc(50% - 10px)',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : 'auto',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '3px',
    border                : '1px solid #eff2f7',
    padding               : '0px 20px',
    backgroundColor       : '#f7faff',
    width                 : '500px',
    height                : '600px'
  }
};

export default ModalStyle;

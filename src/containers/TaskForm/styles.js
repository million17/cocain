const styles = (theme) => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    width: '100%',
  },
  headerModal: {
    display: 'flex',
    alginItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
  },
});

export default styles;

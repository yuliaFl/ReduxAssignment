import * as React from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { connect } from 'react-redux'

import { load } from '../redux/actions/factload'

const Facts = ({ factitem, load }) => {
  React.useEffect(() => {
   // load()
  }, []);

  return (
    <View style={factsStyle.container}>
      <Button
        title="Get Fact"
        onPress={load}
        color="orange"
      />
      <p>{factitem}</p>
    </View>
  );
}

const mapStateToProps = state => ({
  factitem: state.appstore.fact
});

const mapDispatchToProps = (dispatch) => ({ load: () => load(dispatch) });


const factsStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Facts);


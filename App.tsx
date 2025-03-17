import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import FoxitPDF from '@foxitsoftware/react-native-foxitpdf';

type Props = {};
export default class FoxitPDFEditor extends Component<Props> {

  constructor(props: Props) {
     super(props);

     FoxitPDF.initialize("Jcha9SRU93WCxj5YxQ8WLomVfVei89qRPD9/LGodwDK1Qu/QRXodDA","ezJvjk3GrBp3NEt5JF0+ePKEDHH0Pnvyh+1gONobLVxzhIh5v7hnzVUA6CLaZDdo+DUgdgpkTkaDr7i9wJDL7zrpZQXw3tAq3eGkVmXY7gglhxGsWVgEK6FhjWXGblLMWD2qkEi43l+Q76uIaetIVJfm6Lncx7uBevrOkr60hkDupPyAKRsObnFM9hR9iyJG5qsSAX3NkioUnBDgZus8zU95EweM2KeE5RwLBnuMdkep5F7VoR/50nz1ZaECwcQQiEmBkmr/hWVAzMbJ7Rbwd3izlQUssBCQSC1DbaN7SHNEeWqYNor7FXQY8lcXB6jcYppFWHc68JbuL+aD7S8gLGME280AENcDtaC5YrUXIku6TlA0j9SYwDEuJ+npqYdw8ss+WO2JFwxWzEZ6ZFxbLQDxL4OPTPg4KvmhpyOg7wuvCSuC9t0a7qq8t4LZXcwHbu7uduQODFSgaEgdT7fzG6WvFVtJ7Q3favtPEonMhGehwJkUKK0VKfV4bPWxtfart5YBLelZ4YMcwqnSUFvCyEx+nwUDSS+Mn44OUvLLWX9XWOBwJytj6hiHyX6WLfWFfjMX2E6ScdrIE9eR0hQfCBIAGK7aLbfejFYhyeSvncRrODF5QXqEhiFXyLBkp4CIovI2AX9TSWEoe6bO8sDsWg+LAQEu83KuwemHh8HVEHL/QyfKTPR0wvCaoZMM+OlcGnUvxNvl446061yS/FLMPPUovy/sVbKsqGHeCpjyDzGL/Xu3SWfYYTgbFUZJzziD6sGqAQMqIUIj1cX1tPTL2eYLOQjySo+oQd3C6Kt0IAzzjYCnAM8/+w25UQhPLiYw9euRbIB5sL89/nt2O64Q6wWzCPt8k/zl7lIowtAwiGUDeaYGicry8TrbKB3o0LQ/qoyEVfuSSrTrAI7uAAL9A8QLD4Rv1rOyDSX3NEZCkVb1N0YelwARRo9sXGfOkOdsfSvie2OEn3q6sKFIVrCixxOmr5OgTo7B5HF4DSZ/Ub5r31gLoHhCE9cBLkpYavwuu7P+yJsyRi5hCug2pq1OCedsYovNlzIOH6fvv9vZV5jEY7NOOF/lITHQ3AGq5lMlVdAaLfS4ALmbktGO+U5GSDeZ1arqWmUIdBOz0/uuxCyfYTiU9RJ7a1WYK1N7YrjJGsBHo6HdS1Kw21++HFx5Oxb8aDYN2Qu3x0Cf768fpmnBWpm0TjunaQ+N8zC9DrCNGU5qPs0b2csMCzU30bKUNveO2b0A9w4aCILC30GkX3dP3P17mDmMlbbYxE7KT3VdY/xxidisJnOYPqmu1Mfo");
  }


  onPress = async () => {
    try {
      await FoxitPDF.openDocFromUrl('https://developers.foxitsoftware.com/resources/pdf-sdk/FoxitPDFSDK_QuickGuide(PDFium).pdf');
      ;
      console.log('PDF opened successfully');
    } catch (error) {
      console.error('FoxitPDF Error:', error);
      //alert('Error: ' + JSON.stringify(error)); // Show full error in an alert
    }
  };
  

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>Open PDF</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
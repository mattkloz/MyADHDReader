import { bexContent } from 'quasar/wrappers'
import applyStyles from './scripts/apply-styles';
import { IStyleOptions } from '../src/components/models';

const baseOptions = {
  paragraphFontSize: 1.15,
  paragraphLetterSpacing: 1.3,
  paragraphLineHeight: 1.75,
  paragraphFontWeight: 300,
  readerFontWeight: 700,
} as IStyleOptions;

export default bexContent(async (bridge) => {
  const { data } = await bridge.send('storage.get', { key: 'styleOptions' })

  applyStyles(data || baseOptions);
});

import BigView from '../components/BigView';
import BigViewItem from '../components/BigViewItem';
import DetailViewItem from '../components/DetailViewItem';

test('it renders correclty', () => {
  const component = DetailViewItem;
  expect(component).toMatchSnapshot();
});

test('it renders correclty', () => {
  const component1 = BigViewItem;
  expect(component1).toMatchSnapshot();
});

test('it renders correclty', () => {
  const componentR = BigView;
  expect(componentR).toMatchSnapshot();
});

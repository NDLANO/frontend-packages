import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-tabs');

const ArticleTabs = ({ tabs }) => {
  const tabElements = [];
  const tabPanels = [];

  tabs.forEach((tab, index) => {
    const selected = index === 0;
    let modifiers = null;
    let tabIndex = null;

    if (selected) {
      modifiers = ['selected'];
      tabIndex = 0;
    }

    const tabPanelId = `${tab.id}_panel`;

    tabElements.push(
      <li
        data-index={index}
        key={tab.id}
        {...classes('tab', modifiers)}
        id={tab.id}
        tabIndex={tabIndex}
        role="tab"
        aria-selected={selected}
        aria-controls={tabPanelId}>
        {tab.title}
      </li>,
    );

    tabPanels.push(
      <div
        key={tabPanelId}
        {...classes('panel')}
        role="tabpanel"
        id={tabPanelId}
        aria-hidden={!selected}
        aria-labelledby={tab.id}>
        {tab.content}
      </div>,
    );
  });
  return (
    <div {...classes('', 'article')} data-length={tabs.length}>
      <ul {...classes('list')} role="tablist">
        {tabElements}
      </ul>
      {tabPanels}
    </div>
  );
};

ArticleTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    }),
  ),
};

export default ArticleTabs;

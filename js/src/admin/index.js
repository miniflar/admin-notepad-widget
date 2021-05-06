import app from 'flarum/app';
import { extend } from 'flarum/common/extend';
import DashboardPage from 'flarum/admin/components/DashboardPage';
import NotepadWidget from './components/NotepadWidget';

const translationPrefix = 'miniflar-admin-notepad-widget.admin.';

app.initializers.add('miniflar/admin-notepad-widget', () => {
  extend(DashboardPage.prototype, 'availableWidgets', (widgets) => {
    widgets.add('notepad', <NotepadWidget />, app.data.settings['miniflar-admin-notepad-widget.widget_order']);
  });

  app.extensionData.for('miniflar-admin-notepad-widget').registerSetting({
    type: 'number',
    setting: 'miniflar-admin-notepad-widget.widget_order',
    label: app.translator.trans(translationPrefix + 'settings.widget_order_heading'),
    help: app.translator.trans(translationPrefix + 'settings.widget_order_text'),
    placeholder: app.data.settings['miniflar-admin-notepad-widget.widget_order'],
  });
});

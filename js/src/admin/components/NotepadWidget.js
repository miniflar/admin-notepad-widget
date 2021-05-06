import DashboardWidget from 'flarum/admin/components/DashboardWidget';
import Button from 'flarum/common/components/Button';
import saveSettings from 'flarum/admin/utils/saveSettings';

const translationPrefix = 'miniflar-admin-notepad-widget.admin.';

export default class NotepadWidget extends DashboardWidget {
  oninit() {
    this.textInput = '';
    this.loading = false;
  }

  className() {
    return 'NotepadWidget';
  }

  content() {
    return (
      <div className="Form-group NotepadWidget-input">
        <form onsubmit={this.onsubmit.bind(this)}>
          <h4 className="NotepadWidget-Label">{app.translator.trans(translationPrefix + 'dashboard.notepad_heading')}</h4>
          <div className="NotepadWidget-helpText">{app.translator.trans(translationPrefix + 'dashboard.notepad_text')}</div>
          <textarea
            className="NotepadWidget-textarea"
            value={app.data.settings['miniflar-admin-notepad-widget.notes']}
            oninput={(e) => (this.textInput = e.target.value)}
          >
            {this.textInput}
          </textarea>
          <Button className="Button Button--primary" type="submit" loading={this.loading} disabled={!this.isChanged()}>
            {app.translator.trans('core.admin.settings.submit_button')}
          </Button>
        </form>
      </div>
    );
  }

  isChanged() {
    return this.textInput.length;
  }

  onsaved() {
    this.loading = false;

    app.alerts.show({ type: 'success' }, app.translator.trans('core.admin.settings.saved_message'));
  }

  onsubmit(e) {
    e.preventDefault();

    app.alerts.clear();
    saveSettings({ ['miniflar-admin-notepad-widget.notes']: this.textInput }).then(this.onsaved.bind(this));
  }
}

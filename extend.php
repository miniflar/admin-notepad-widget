<?php

/*
 * This file is part of miniflar/admin-notepad-widget.
 *
 * Copyright (c) miniFLAR.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace MiniFLAR\AdminNotepadWidget;

use Flarum\Extend;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Settings())
        ->default('miniflar-admin-notepad-widget.widget_order', 29)
];

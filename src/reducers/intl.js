import {addLocaleData} from 'react-intl';
import {updateIntl as superUpdateIntl} from 'react-intl-redux';
import {IntlProvider, intlReducer} from 'react-intl-redux';
import defaultsDeep from 'lodash.defaultsdeep';

import localeData from 'scratch-l10n';
import guiMessages from 'scratch-l10n/locales/gui-msgs';
import paintMessages from 'scratch-l10n/locales/paint-msgs';
import penMessages from 'scratch-l10n/locales/pen-msgs';

// 按照这样的格式, 更改一下哈哈哈, 将所有需要翻译的全都添加进来
// 加一个zh
const a = {
    en: {
        messages: {
            'gui.previewInfo.welcome': 'proxy haha'
        }
    }
};

const combinedMessages = defaultsDeep({}, guiMessages.messages, paintMessages.messages, penMessages.messages, a);

Object.keys(localeData).forEach(locale => {
    // TODO: will need to handle locales not in the default intl - see www/custom-locales
    addLocaleData(localeData[locale].localeData);
});

const intlInitialState = {
    intl: {
        defaultLocale: 'en',
        locale: 'en',
        messages: combinedMessages.en.messages
    }
};

const updateIntl = locale => superUpdateIntl({
    locale: locale,
    messages: combinedMessages[locale].messages || combinedMessages.en.messages
});

export {
    intlReducer as default,
    IntlProvider,
    intlInitialState,
    updateIntl
};

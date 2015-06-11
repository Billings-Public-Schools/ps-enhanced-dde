require(['jquery'], function($) {
    $(function() {
        'use strict';

        var extras = 3,
            template = $('select[name="fieldnum_2"]').parent().parent();

        if (template != undefined) {
            for (var i = extras; i >0; i--) {
                var clone = $(template).clone().removeAttr('id');
                $('select[name="fieldnum_2"]', clone).attr('name', 'fieldnum_'+(i+2))
                    .removeAttr('onchange')
                    .change(function(){
                        set_comp(this, $(this).parent().next('span').find('select').get(0));
                    });
                $('select[name="comparator2"]', clone).attr('name', 'comparator'+(i+2));
                $(template).after(clone);
            }
        }

    });
});

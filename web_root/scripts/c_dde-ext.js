require(['jquery'], function($) {
    $(function() {
        'use strict';
        
        var addCriteria = function() {
            var template,
                newCriteria,
                fieldSelect,
                re,
                newIdNumber;
            
            template = $('select[name^="fieldnum_"]').last().parent().parent();
            newCriteria = template.clone();
            fieldSelect = newCriteria.children().first().children();
            
            re = /fieldnum_(\d+)/;
            newIdNumber = parseInt(re.exec(fieldSelect.attr('name'))[1]) + 1;
            fieldSelect.attr('name', 'fieldnum_' + newIdNumber);
            fieldSelect.attr('onchange', 'set_comp(this, this.form.comparator' + newIdNumber + ')');
            
            fieldSelect.parent().siblings().first().children().attr('name', 'comparator' + newIdNumber);
            
            template.after(newCriteria);
            
            return false;
        };
        
        $('input[name="applyschoolfilter"]').before('<div class="button-row"><button id="addCriteria">Add Criteria</button></div>');
        $('#addCriteria').on('click', addCriteria);
        
    });
});

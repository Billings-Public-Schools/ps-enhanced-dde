require(['jquery'], function($) {
    $(function() {
        'use strict';
        
        // get a template of the criteria
        var template = $('select[name^="fieldnum_"]').parent().parent().last();
        
        var renumberCriteria = function() {
            // get all the criteria divs
            var criteria = $('select[name^="fieldnum_"]').parent().parent();
            
            criteria.each(function(i, c) {
                var children = $(c).children().children(),
                    field1,
                    field2;
                field1 = $(children[0]);
                field2 = $(children[1]);
                
                // update the field names
                field1.attr('name', 'fieldnum_' + (i+1));
                field1.attr('onchange', 'set_comp(this, this.form.comparator' + (i+1) + ')');
                field2.attr('name', 'comparator' + (i+1));
            });
            
        };
        
        var addCriteria = function(e) {
            // prevent submitting the form
            e.preventDefault();
            
            // clone our template
            var newCriteria = template.clone();
            
            // add the new critera to the page
            $('fieldset div').last().before(newCriteria)
            
            renumberCriteria();
        };
        
        var removeCriteria = function(e) {
            // prevent submitting the form
            e.preventDefault();
            
            // remove the div of the grandparent of the button clicked
            $(this).parent().parent().remove();
            
            renumberCriteria();
        };
        
        // create the button the add critera
        $('input[name="applyschoolfilter"]').parent().append('<button id="addCriteria" style="margin: 5px; float:right">Add Criteria</button>');
        $('#addCriteria').on('click', addCriteria);
        $('#addCriteria').parent().attr('style', 'background-color: white');
        
        // create the removeCritera button
        $('input[name="value"]').after('<button class="removeButton" style="margin: 0 5px"><img src="/images/img/icon-delete.svg" width="10" height="10"></button>');
        $('fieldset.inline').on('click', '.removeButton', removeCriteria);
        
    });
});
